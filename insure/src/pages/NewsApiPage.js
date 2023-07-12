import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import SearchInput from "../components/news/SearchInput";

const NewsApiPage = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const handleChange = () => {
    console.log("값이 변해요");
  };
  const handleClick = () => {
    console.log("클릭이벤트 변해요");
  };

  return (
    <div>
      <AppHeader title={"뉴스검색"}></AppHeader>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      {/* 
            <searchInput/>
            <newsList>        
      */}
    </div>
  );
};

export default NewsApiPage;
