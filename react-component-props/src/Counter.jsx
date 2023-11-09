import { useState } from "react";
import CountDisplay from "./CountDisplay";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountDisplay count={count} />

      <div className="d-grid gap-2 col-6 mx-auto mt-2">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button
          className="btn btn-dark mb-4"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
