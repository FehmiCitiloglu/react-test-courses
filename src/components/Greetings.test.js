import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    // Arrange
    render(<Greetings />);

    // Act
    //... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greetings />);

    const paragraphElement1 = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(paragraphElement1).toBeInTheDocument();
  });

  test("renders 'Changed' if the button was clicked ", () => {
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.getByText("changed!", { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });
  test('NOT renders "good to see you" if the button was clicked', () => {
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
