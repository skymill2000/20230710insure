import React from "react";
import axios from "axios";

const AxiosExample = () => {
  const handleClick = () => {
    axios
      .get("주소")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <div>
      <button onClick={handleClick}>조회하기</button>
    </div>
  );
};

export default AxiosExample;
