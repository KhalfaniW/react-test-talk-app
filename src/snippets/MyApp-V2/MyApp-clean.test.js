import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {prettyDOM} from "@testing-library/dom";
import MyApp from "./MyApp-clean";

test("start app", () => {
  const {container} = render(<MyApp />);
  startApp(screen);
  expect(getAppMessage(screen), prettyDOM(container)).toBe("Started"); //Assert
});

function startApp(screen) {
  const myTextBox = screen.getByLabelText("Type Here");
  fireEvent.change(myTextBox, {target: {value: "Start"}});
}

function getAppMessage(screen) {
  const mainContent = screen.getByRole("main");
  return mainContent.textContent;
}
