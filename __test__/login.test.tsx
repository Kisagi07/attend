import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginPage from "@/app/login/page";
import React from "react";
import nextAuth from "next-auth/react";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn().mockReturnValue({
    get: (key: string) => {
      const params = new URLSearchParams([["callbackUrl", "/home"]]);
      return params.get(key);
    },
  }),
}));
jest.mock("next-auth/react", () => ({
  useSession: jest.fn().mockResolvedValue({ user: { name: "mock" }, expires: "fake-expires" }),
  signIn: jest.fn().mockResolvedValue({ error: null, url: "/home" }),
}));
describe("Login Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  //? Happy Path
  // Redirects to the callback URL upon successful login using jest.spyOn
  it("should redirect to the callback URL on successful login using jest.spyOn", async () => {
    const mockPush = jest.fn();
    const mockSignIn = jest.fn().mockResolvedValue({ error: null, url: "/home" });
    jest.spyOn(require("next/navigation"), "useRouter").mockReturnValue({ push: mockPush });
    jest
      .spyOn(require("next/navigation"), "useSearchParams")
      .mockReturnValue(new URLSearchParams({ callbackUrl: "/home" }));
    jest.spyOn(require("next-auth/react"), "signIn").mockImplementation(mockSignIn);

    const { getByLabelText, getByText } = render(<LoginPage />);
    const pinInput = getByLabelText(/PIN/i);
    const submitButton = getByText(/Submit/i);

    fireEvent.change(pinInput, { target: { value: "123456" } });
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(mockSignIn).toHaveBeenCalledWith("credentials", {
        PIN: "123456",
        callbackUrl: "/home",
        redirect: false,
      })
    );

    await waitFor(() => expect(mockPush).toHaveBeenCalledWith("/home"));
  });
  // PIN input updates state correctly
  it("should update PIN state when input changes", () => {
    const { getByLabelText } = render(<LoginPage />);
    const pinInput = getByLabelText(/PIN/i);

    fireEvent.change(pinInput, { target: { value: "123456" } });

    expect(pinInput).toHaveValue("123456");
  });
  // Submit button shows loading state when submitting
  it("should show loading state (disabled) when submitting", async () => {
    const mockSignIn = jest.fn().mockResolvedValue({ error: null, url: "/home" });

    jest
      .spyOn(require("next-auth/react"), "signIn")
      .mockResolvedValue({ error: null, url: "/home" });

    const { getByRole } = render(<LoginPage />);
    const submitButton = getByRole("button", { name: /submit/i });

    await act(async () => {
      fireEvent.click(submitButton);
      await new Promise(process.nextTick);
    });

    expect(submitButton).toBeDisabled();
  });
  // Error message displays when login fails
  it("should display error message when login fails using jest spyon", async () => {
    const mockSignIn = jest
      .spyOn(require("next-auth/react"), "signIn")
      .mockResolvedValue({ error: true });

    const { getByLabelText, getByRole, getByTestId } = render(<LoginPage />);
    const pinInput = getByLabelText(/PIN/i);
    const submitButton = getByRole("button", { name: /submit/i });

    fireEvent.change(pinInput, { target: { value: "123456" } });
    act(() => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => expect(getByTestId("incorrent")).toBeInTheDocument());
  });
  //? Edge Cases
  // PIN input prevents non-numeric characters
  it("should prevent non-numeric characters in PIN input", async () => {
    const { getByLabelText } = render(<LoginPage />);
    const pinInput = getByLabelText(/PIN/i) as HTMLInputElement;

    act(() => {
      fireEvent.keyDown(pinInput, { key: "a" });
    });
    expect(pinInput.value).toBe("");

    act(() => {
      fireEvent.keyDown(pinInput, { key: "1" });
      fireEvent.change(pinInput, { target: { value: "1" } });
    });
    expect(pinInput.value).toBe("1");
  });
  // Form submission with empty PIN
  it("should display error message when PIN is empty", async () => {
    const mockPush = jest.fn();
    const spySignIn = jest
      .spyOn(require("next-auth/react"), "signIn")
      .mockResolvedValue({ error: true, url: "/home" });
    jest.spyOn(require("next/navigation"), "useRouter").mockReturnValue({ push: mockPush });

    const { getByRole, getByText } = render(<LoginPage />);
    const submitButton = getByRole("button", { name: /submit/i });

    await act(async () => {
      fireEvent.click(submitButton);
      await new Promise(process.nextTick);
    });

    expect(spySignIn).not.toHaveBeenCalled();
    expect(mockPush).not.toHaveBeenCalled();
    expect(getByText(/Make sure the PIN are correct/)).toBeInTheDocument();
  });
  // Form submission with incorrect PIN
  it("should display error message when submitting form with incorrect PIN", async () => {
    const mockSignIn = jest.fn().mockResolvedValue({ error: true });
    jest.spyOn(nextAuth, "signIn").mockImplementation(mockSignIn);

    const { getByLabelText, getByRole, getByTestId } = render(<LoginPage />);
    const pinInput = getByLabelText(/PIN/i);
    const submitButton = getByRole("button", { name: /submit/i });

    await act(async () => {
      fireEvent.change(pinInput, { target: { value: "invalidPIN" } });
      fireEvent.click(submitButton);
      await new Promise(process.nextTick);
    });

    expect(mockSignIn).toHaveBeenCalledWith("credentials", {
      PIN: "invalidPIN",
      callbackUrl: "/home",
      redirect: false,
    });

    expect(getByTestId("incorrent")).toHaveTextContent("Make sure the PIN are correct");
  });
  // Handling of network errors durring sign-in process
  it("should display error message when network error occurs during sign-in process", async () => {
    const mockSignIn = jest.fn().mockResolvedValue({ error: true });
    jest.spyOn(nextAuth, "signIn").mockImplementation(mockSignIn);

    const { getByLabelText, getByRole, getByTestId } = render(<LoginPage />);
    const pinInput = getByLabelText(/PIN/i);
    const submitButton = getByRole("button", { name: /submit/i });

    await act(async () => {
      fireEvent.change(pinInput, { target: { value: "123456" } });
      fireEvent.click(submitButton);
      await new Promise(process.nextTick);
    });

    await waitFor(() => expect(getByTestId("incorrent")).toBeInTheDocument());
  });
});
