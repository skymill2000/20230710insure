import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";

const NewsApiPage = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div>
      <AppHeader title={"뉴스검색"}></AppHeader>
      {/* 
            <searchInput/>
            <newsList>        
      */}
    </div>
  );
};

export default NewsApiPage;
