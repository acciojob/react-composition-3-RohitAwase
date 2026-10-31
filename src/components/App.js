import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip for heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="This is a tooltip for paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="Click me!">
        <button>Hover over this button</button>
      </Tooltip>
    </div>
  );
}

export default App;
