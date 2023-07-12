import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map(({ title, description }) => {
        return (
          <>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </>
        );
      })}
    </div>
  );
};

export default NewsList;
