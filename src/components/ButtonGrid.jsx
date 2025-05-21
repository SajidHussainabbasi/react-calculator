
import Button from "./Button";
import "../Calculator.css";

const ButtonGrid = ({ onClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "+", "=",
  ];

  return (
    <div className="button-grid">
      {buttons.map((btn) => (
        <Button
          key={btn}
          value={btn}
          onClick={onClick}
          isZero={btn === "0"}
        />
      ))}

      {/* Clear button inside grid, with classes for full width */}
      <Button
        value="C"
        onClick={onClick}
        className="button clear large"
      />
    </div>
  );
};

export default ButtonGrid;