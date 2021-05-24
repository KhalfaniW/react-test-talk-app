import {fireEvent, render} from "@testing-library/react";
import React from "react";
import React from "react";

export default function Example() {
  return <div>Example Text</div>;
}
test("SelectThings renders ", () => {
  render(<Example />);
});
const {getByTestId} = render(<TestElements />);
expect(getByTestId("counter")).toHaveTextContent(0);
