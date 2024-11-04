import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("마운트 및 업데이트 될때 실행");
  // });

  // useEffect(() => {
  //   console.log("마운트 될때만 실행");
  // }, []);

  useEffect(() => {
    console.log("num 값이 변경될때 실행");
    return () => {
      console.log("cleanup 함수 실행");
    };
  }, [num]);
  return (
    <>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </>
  );
};

export default App;

// *useEffect (()=>{},[])
// =>mount : 첫 랜더링
// =>update : 리 랜더링
// =>unmount : 화면에서 사라질때(삭제)
// =>콜백함수 : 랜더링이 되거나 리 랜더가 되었을때 실행됨
// =>deps : 화면에 첫 랜더링 될때 또는 값이 변경될때 실행
// 빈배열로 작성시 화면에 첫 랜더링 될때만 실행됨
