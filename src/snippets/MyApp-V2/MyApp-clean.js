import React, {useState} from "react";

export default function MyApp() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div>
      <label htmlFor="main-input">Type Here</label>
      <input
        id="main-input"
        type="text"
        onChange={(event) => setIsStarted(event.target.value === "Start")}
      />
      <main>
        <p>{isStarted ? "Started" : "Stopped"}</p>
      </main>
    </div>
  );
}
