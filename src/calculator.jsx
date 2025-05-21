import React, { useState } from "react";
import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(input);
        if (result === undefined) {
          setInput("Error");
        } else {
          setInput(result.toString());
        }
      } catch (error) {
        console.error("Evaluation error:", error);
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <ButtonGrid onClick={handleClick} />
      {/* Remove the separate clear button here */}
    </div>
  );
};

export default Calculator;