import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1>Hello</h1>
      <ColorfulMessage color="blue">how are you</ColorfulMessage>
      <ColorfulMessage color="pink">Im fine</ColorfulMessage>
      <button onClick={onClickCountUp}>count Up</button>

      <p>{num}</p>

      <button onClick={onClickSwitchFlag}>on/off</button>

      {faceShowFlag && <p>(''smm)</p>}
    </>
  );
};

export default App;
