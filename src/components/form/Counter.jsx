import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center py-2 px-4">
      <button
        onClick={decrement}
        className="border border-gray-300 rounded-lg px-3 py-1  mr-2"
      >
        -
      </button>
      <span className="border border-gray-300 rounded-lg px-3 py-1  mr-2 w-1/4 text-center">
        {count}
      </span>
      <button
        onClick={increment}
        className="border border-gray-300 rounded-lg px-3 py-1  mr-2"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
