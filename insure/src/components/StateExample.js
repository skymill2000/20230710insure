import React, { useState } from "react";

const StateExample = () => {
  const [name, setName] = useState("홍길동");
  setInterval(() => {
    // name = '둘리'
    setName("둘리");
  }, 5000);
  return <div>{name}</div>;
};

export default StateExample;
