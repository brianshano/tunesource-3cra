import "./styles.css";

import React, { useState } from "react";
import { Notation, Midi } from "react-abc";

const abcNotation = "X:1\nT:Test\nM:4/4\nC:Trad.\nK:G\n|:GABc dedB";

function App() {
  const [notation, setNotation] = useState(abcNotation);

  return (
    <div className="App">
      <textarea
        value={notation}
        onChange={(e) => setNotation(e.target.value)}
      />
      <Notation notation={notation} />
      <Midi notation={notation} />
    </div>
  );
}

export default App;
