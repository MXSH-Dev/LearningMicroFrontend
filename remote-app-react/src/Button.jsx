import { useState } from "react";

import "./Button.css";
// import useCount from "./store";

export const Button = () => {
  //   const [state, setState] = useCount();
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        // style={{ background: "#000", color: "white" }}
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        Remote React: Click me: {state}
      </button>
    </div>
  );
};

export default Button;
