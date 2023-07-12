import React, { useState } from "react";

const StateExample = () => {
  const [name, setName] = useState("홍길동");
  const handleClick = () => {
    console.log(name);
    alert(name);
  };
  const handleChange = (e) => {
    console.log(e);
    const writtenName = e.target.value;
    setName(writtenName);
  };

  return (
    <div>
      <p>{name}</p>
      이름: <input onChange={handleChange}></input>
      <button onClick={handleClick}>입력</button>
    </div>
  );
};

export default StateExample;
