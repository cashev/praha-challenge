import { useEffect, useRef } from "react";

export const SomeComponent = ({ someFlag }) => {
  const counterRef = useRef(0);

  useEffect(() => {
    if (someFlag) {
      counterRef.current += 1;
    }
  });

  return (
    <>
      <p>ここに、このコンポーネントがレンダリングされた回数を表示してみよう!</p>
      <div>{counterRef.current}</div>
    </>
  );
};
