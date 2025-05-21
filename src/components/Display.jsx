
import "../Calculator.css";

const Display = ({ input }) => (
  <div className="display">
    {input || "0"}
  </div>
);

export default Display;