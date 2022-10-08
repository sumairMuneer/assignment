import React from "react";

const dummyFun = () => {
}

export default function TextLink({text, handler = dummyFun, classes}) {
  return (
    <span className={`  ${classes}`} onClick={handler}>
      {text}
    </span>
  );
}
