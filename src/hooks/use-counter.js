import { useEffect, useState } from "react";
const useCounter = (forwards = true) => {
  //const useCounter = (updateCounterFn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //   setCounter((prevCounter) => prevCounter + 1);
      // setCounter(updateCounterFn());
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
  return counter;
};

export default useCounter;
