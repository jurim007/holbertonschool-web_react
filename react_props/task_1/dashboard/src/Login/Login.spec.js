import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders 2 labels, 2 inputs, and 1 button", () => {
  render(<Login />);
  const inputs = document.querySelectorAll("input");
  const labels = document.querySelectorAll("label");
  const buttons = screen.getAllByRole("button");

  expect(labels).toHaveLength(2);
  expect(inputs).toHaveLength(2);
  expect(buttons).toHaveLength(1);
});

test("focuses input when related label is clicked", () => {
  render(<Login />);
  const labels = document.querySelectorAll("label");

  labels.forEach((label) => {
    const input = document.getElementById(label.htmlFor);
    label.click();
    expect(input).toHaveFocus();
  });
});