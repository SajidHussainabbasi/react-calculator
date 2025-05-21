
import "../calculator.css";

const Button = ({ value, onClick, isZero, className }) => {
  return (
    <button
      className={`button ${isZero ? "zero" : ""} ${className ? className : ""}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;