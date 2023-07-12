import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import SearchInput from "../components/news/SearchInput";
import axios from "axios";
import NewsList from "../components/news/NewsList";

const NewsApiPage = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    console.log("값이 변해요");
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const handleClick = () => {
    console.log(searchText);
    let requestUrl = `https://newsapi.org/v2/everything?q=${searchText}&from=2023-06-12&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`;
    axios.get(requestUrl).then(function ({ data }) {
      // handle success
      console.log(data.articles);
      setSearchResult(data.articles);
    });
    // axios.get()
  };

  return (
    <div>
      <AppHeader title={"뉴스검색"}></AppHeader>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList newsList={searchResult}></NewsList>
    </div>
  );
};

export default NewsApiPage;
