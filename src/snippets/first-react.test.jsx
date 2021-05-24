import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";

//Put this in a new file
function Example() {
  return <div>Example Text</div>;
}
// Put the above in a new file
test("SelectThings renders ", () => {
  render(<Example />);
});
