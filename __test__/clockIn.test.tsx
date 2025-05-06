import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ClockInOut from "@/app/components/ClockInOut";

// test("Clock In", () => {
//     const getCurrentPosition = vi.fn().mockReturnValue({coords:{latitude: -7.570369935745772,longitude: 112.72464932553629}});
//     const navigator = {
//         geolocation: {
//             getCurrentPosition
//         }
//     }

//     render(<ClockInOut />);
//     expect(screen.getByTestId("clock-in-out")).toBeDefined();
// });

test("Clock In with mocked getCurrentPosition", () => {
    const mockGetCurrentPosition = vi.fn((successCallback) => {
        successCallback({ coords: { latitude: 37.7749, longitude: -122.4194 } });
    });

    Object.defineProperty(global.navigator, "geolocation", {
        value: {
            getCurrentPosition: mockGetCurrentPosition,
        },
        writable: true,
    });

    render(<ClockInOut />);

    expect(mockGetCurrentPosition).toHaveBeenCalled();
    // expect(screen.getByTestId("clock-in-out")).toBeDefined();
});

// test("Clock In button click", () => {
//     render(<ClockInOut />);
//     const clockInButton = screen.getByText("Clock In");
//     fireEvent.click(clockInButton);
//     expect(screen.getByText("Clocked In")).toBeDefined();
// });

// test("Clock Out button click", () => {
//     render(<ClockInOut />);
//     const clockOutButton = screen.getByText("Clock Out");
//     fireEvent.click(clockOutButton);
//     expect(screen.getByText("Clocked Out")).toBeDefined();
// });

// test("Mock nested function", () => {
//     const mockNestedFunction = vi.fn();
//     const something = {
//         something: {
//             mockThis: mockNestedFunction,
//         },
//     };

//     something.something.mockThis();
//     expect(mockNestedFunction).toHaveBeenCalled();
// });

// test("Mock nested function with return value", () => {
//     const mockNestedFunction = vi.fn().mockReturnValue("mocked value");
//     const something = {
//         something: {
//             mockThis: mockNestedFunction,
//         },
//     };

//     const result = something.something.mockThis();
//     expect(mockNestedFunction).toHaveBeenCalled();
//     expect(result).toBe("mocked value");
// });