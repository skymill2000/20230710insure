import React from "react";
import axios from "axios";

const AxiosExample = () => {
  const handleClick = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=테슬라&from=2023-06-12&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5"
      )
      .then(function (response) {
        // handle success
        console.log(response);
      });
  };
  return (
    <div>
      <button onClick={handleClick}>조회하기</button>
    </div>
  );
};

export default AxiosExample;
