import React, { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(true);
  const handleChangeText = () => {
    setChangedText((prev) => !prev);
  };
  return (
    <div>
      <h2>hello world</h2>
      {changedText && <Output>its good to see you </Output>}
      {!changedText && <Output>Changed!! </Output>}

      <button onClick={handleChangeText}>Change Text</button>
    </div>
  );
}

export default Greeting;
