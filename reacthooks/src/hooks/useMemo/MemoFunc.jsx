import React, { useMemo } from "react";
import { useState } from "react";

const MemoFunc = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);
  const getValue = () => {
    return setMyNum(myNum + 1);
  };
  const countNumber = (num) => {
    console.log("line 10 --- counNumber func ", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  // without useMemo
  const checkData = countNumber(myNum);

  // const checkData = useMemo(() => {
  //   return countNumber(myNum);
  // }, [myNum])

  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={getValue}
      >
        Counter
      </button>
      <p>My new number: {checkData} </p>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShow(!show)}
      >
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  );
};

export default MemoFunc;
