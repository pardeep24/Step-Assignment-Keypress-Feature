import "./App.css";
import React, { useCallback, useReducer } from "react";
import Keypress from "./Components/Keypress";

const logInfo = (currentLog, action) => {
  switch (action.type) {
    case "ADD":
      return [...currentLog, action.color];
    default:
      throw new Error("Should not get there!");
  }
};

function App() {
  const [userLog, dispatch] = useReducer(logInfo, []);
  const turnRed = useCallback(() => {
    dispatch({
      type: "ADD",
      color: {
        time: new Date(),
        color: "red",
        description: "Component A: shift+r to change color to Red",
      },
    });
  }, []);

  const turnGreen = useCallback(() => {
    dispatch({
      type: "ADD",
      color: {
        time: new Date(),
        color: "green",
        description: "Component B: shift+r to change color to Green",
      },
    });
  }, []);

  const turnYellow = useCallback(() => {
    dispatch({
      type: "ADD",
      color: {
        time: new Date(),
        color: "yellow",
        description: "Component C: shift+r to change color to Yellow",
      },
    });
  }, []);
  console.log(userLog);
  return (
    <div className="App">
      <Keypress combo="shift r" callback={turnRed} description="Component A" />
      <Keypress
        combo="shift g"
        callback={turnGreen}
        description="Component B"
      />
      <Keypress
        combo="shift y"
        callback={turnYellow}
        description="Component C"
      />
      <div className="block information">
        <h3>Component A: shift+r to change color to Red</h3>
        <h3>Component B: shift+g to change color to Green</h3>
        <h3>Component C: shift+y to change color to Yellow</h3>
      </div>
    </div>
  );
}

export default App;
