import React, {  useState } from "react";
import keypress from "keypress.js";

function Keypress({ combo, callback, description }) {
  const [color, setColor] = useState("");
  const listener = new keypress.Listener();

  listener.simple_combo(
    combo,
    (function() {
      if (combo === "shift r") {
        setColor("red");
      }
      if (combo === "shift g") {
        setColor("green");
      }
      if (combo === "shift y") {
        setColor("yellow");
      }
      return callback()
    })
  );

  return (
    <div className={`block ${color}`}>
      <h1>{description}</h1>
    </div>
  );
}

export default React.memo(Keypress);
