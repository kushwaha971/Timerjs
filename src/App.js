import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(0);
  useEffect(() => {
    let intevalId = null;
    if (startTimer) {
      intevalId = setInterval(() => {
        setValue((prev) => (prev += 1));
      }, 1000);

      setTimerId(intevalId);
    } else {
      clearInterval(timerId);
    }

    return () => {
      if (timerId != 0) {
        clearInterval(timerId);
      }
    };
  }, [startTimer]);
  return (
    <div className="App">
      <h3>{value}</h3>
      <br />
      <br />
      <button
        style={{ margin: "2px", padding: "5px" }}
        onClick={() => setStartTimer(true)}
      >
        start
      </button>
      <button
        style={{ margin: "2px", padding: "5px" }}
        onClick={() => setStartTimer(false)}
      >
        stop
      </button>
      <button
        style={{ margin: "2px", padding: "5px" }}
        onClick={() => setValue(0)}
      >
        Reset
      </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
