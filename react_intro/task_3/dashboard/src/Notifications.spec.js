import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

describe("Notifications component", () => {
    test("renders the notifications title (case-insensitive)", () => {
        render(<Notifications />);

        expect(
            screen.getByText(/here is the list of notifications/i)
        ).toBeInTheDocument();
    });

    test("renders a close button", () => {
        render(<Notifications />);

        expect(
            screen.getByRole("button", { name: /close/i })
        ).toBeInTheDocument();
    });

    test("renders 3 list items", () => {
        render(<Notifications />);

        const listItems = screen.getAllByRole("listitem");

        expect(listItems).toHaveLength(3);
    });

    test("clicking the close button logs the expected message", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });

        render(<Notifications />);

        const button = screen.getByRole("button", { name: /close/i });
        fireEvent.click(button);

        expect(logSpy).toHaveBeenCalledWith("Close button has been clicked");

        logSpy.mockRestore();
    });
});