import { mockProject } from "@/__mocks__/data";
import { prismaMock } from "@/__mocks__/singleton";
import Page from "@/app/dashboard/projects/[id]/detail/page";
import { calculatePercentageValue, formatRupiah } from "@/app/helper";
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { notFound } from "next/navigation";
import useSWR from "swr";
import ResizeObserver from "resize-observer-polyfill";
global.ResizeObserver = ResizeObserver;
jest.mock("swr");
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("Project Detail", () => {
  it("Loading displayed correctly", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: mockProject,
      isLoading: true,
    });

    const props = { params: { id: "1" } };
    render(<Page {...props} />);

    const loading = screen.getByText("Loading Project");
    expect(loading).toBeInTheDocument();
  });
  it("Display 404 page is project not found", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
    });
    render(<Page {...{ params: { id: "1" } }} />);
    expect(notFound).toHaveBeenCalled();
  });
  describe("Main Header", () => {
    it("Project Title Displayed", () => {
      const props = { params: { id: "1" } };
      (useSWR as jest.Mock).mockReturnValue({
        data: mockProject,
        error: null,
      });

      render(<Page {...props} />);
      const element = screen.getByText(`Detail Regarding : ${mockProject.title}`);
      expect(element).toBeInTheDocument();
    });
  });
  describe("Data Status", () => {
    it("Display Status, Priority, Funding, and Members Amount", () => {
      (useSWR as jest.Mock).mockReturnValue({
        data: mockProject,
      });
      render(<Page {...{ params: { id: "1" } }} />);
      const status = screen.getByTestId("status");
      const priority = screen.getByTestId("priority");
      const fund = screen.getByTestId("fund");
      const members = screen.getByTestId("members");

      expect(status.textContent).toEqual(mockProject.status);
      expect(priority.textContent).toEqual(mockProject.priority);
      expect(fund.textContent).toEqual(formatRupiah(mockProject.fund));
      expect(members.textContent).toEqual(mockProject.projectMembers.length.toString());
    });
  });
  describe("Monthly Recap", () => {
    describe("Spending Progress", () => {
      beforeEach(() => {
        (useSWR as jest.Mock).mockReturnValue({
          data: mockProject,
        });
      });

      it("Show Progress of food, enterntainment, lodging, transportation with matching correct percentage", () => {
        render(<Page {...{ params: { id: "1" } }} />);

        const percentageValue = calculatePercentageValue([
          mockProject.transportationSpending,
          mockProject.foodSpending,
          mockProject.lodgingSpending,
          mockProject.entertainmentSpending,
        ]);
        const transportationProgress = screen.getByTestId("progress-transportation");
        const foodProgress = screen.getByTestId("progress-food");
        const lodgingProgress = screen.getByTestId("progress-lodging");
        const entertainmentProgress = screen.getByTestId("progress-entertainment");

        const transportationValue = transportationProgress.getAttribute("aria-valuenow");
        const foodValue = foodProgress.getAttribute("aria-valuenow");
        const lodgingValue = lodgingProgress.getAttribute("aria-valuenow");
        const entertainmentValue = entertainmentProgress.getAttribute("aria-valuenow");

        expect(transportationValue).toEqual(percentageValue[0].toString());
        expect(foodValue).toEqual(percentageValue[1].toString());
        expect(lodgingValue).toEqual(percentageValue[2].toString());
        expect(entertainmentValue).toEqual(percentageValue[3].toString());
      });
    });
    describe("Spending Chart", () => {
      it("Chart loaded", () => {
        render(<Page {...{ params: { id: "1" } }} />);

        const chart = screen.getByTestId("spending-chart");
        expect(chart).toBeInTheDocument();
      });
    });
  });
});
