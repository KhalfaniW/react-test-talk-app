import {render, screen, fireEvent} from "@testing-library/react";
import {prettyDOM} from "@testing-library/dom";
import React from "react";
import MyApp from "./MyApp-clean";

test("start app (clean version)", () => {
  const {container} = render(<MyApp />);
  startApp(screen);
  //There should only be one main per page.
  //Therefore you can select it without extra specifiers like name
  const appMessage = getAppMessage(screen);
  expect(appMessage, prettyDOM(container)).toBe("Started");
});

function startApp(screen) {
  const myButton = screen.getByRole("button", {name: /Click Me/i});
  fireEvent.click(myButton);
}

function getAppMessage(screen) {
  const mainContent = screen.getByRole("main");
  return mainContent.textContent;
}
