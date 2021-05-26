import {render, screen, fireEvent} from "@testing-library/react";
import MyApp from "./MyApp";

test("Basic App Test", () => {
  render(<MyApp />);
  const myButton = screen.getByRole("button", {name: /Click Me/i});
  expect(myButton).toBeInTheDocument();

  fireEvent.click(myButton);
  //There should only be one main per page.
  //Therefore you can select it without extra specifiers like name
  const mainContent = screen.getByRole("main");
  expect(mainContent).toHaveTextContent("Started");
});
