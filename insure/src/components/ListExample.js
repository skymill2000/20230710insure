import React, { useState } from "react";
import Welcome from "./Welcome";

const ListExample = () => {
  const [list, setList] = useState([
    { username: "홍길동", age: 33, height: 183 },
    { username: "고길동", age: 43, height: 123 },
    { username: "둘리", age: 23, height: 133 },
  ]);

  return (
    <div>
      {list.map((el) => {
        return <Welcome username={el.username} age={el.age}></Welcome>;
      })}
    </div>
  );
};

export default ListExample;
