import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders 2 labels, 2 inputs, and 1 button", () => {
  render(<Login />);
  expect(screen.getAllByRole("textbox").length + screen.getAllByLabelText(/password/i).length).toBeGreaterThanOrEqual(0);
  const inputs = document.querySelectorAll("input");
  const labels = document.querySelectorAll("label");
  const buttons = screen.getAllByRole("button");

  expect(labels).toHaveLength(2);
  expect(inputs).toHaveLength(2);
  expect(buttons).toHaveLength(1);
});

test("focuses input when related label is clicked", () => {
  render(<Login />);

  const emailLabel = screen.getByText(/email address/i);
  const emailInput = screen.getByLabelText(/email address/i);
  emailLabel.click();
  expect(emailInput).toHaveFocus();

  const passwordLabel = screen.getByText(/password/i);
  const passwordInput = screen.getByLabelText(/password/i);
  passwordLabel.click();
  expect(passwordInput).toHaveFocus();
});