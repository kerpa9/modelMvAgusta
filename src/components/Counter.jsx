import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleSum = () => {
    return setCounter((counter) => counter + 1);
  };
  const handleMin = () => {
    return setCounter((counter) => counter - 1);
  };

  return (
    <div className=" flex flex-col items-center text-yellow-50 text-xl mr-4">
      {counter}
      <button className="border px-4 py-2 text-xl my-1" onClick={handleSum}>
        ++
      </button>
      <button className="border px-4 py-2 text-xl my-1" onClick={handleMin}>
        --
      </button>
    </div>
  );
}
