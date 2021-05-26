import React, {useState} from "react";

export default function MyApp() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div >
      <button onClick={() => setIsClicked(true)}>Click Me</button>
      <main style={{ paddingLeft:".5em" }}>
        <p>{isClicked ? "Started": "Stopped"}</p>
      </main>
    </div>
  );
}
