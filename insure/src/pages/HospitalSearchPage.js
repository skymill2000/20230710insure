import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";
import SearchResult from "../components/hospital/SearchResult";

const HospitalSearchPage = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const handleChange = (e) => {
    setSearchInputText(e.target.value);
  };

  const sendRequest = () => {
    const option = {
      method: "GET",
      url: "http://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList",
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ%3D%3D",
        //   서비스키 본인것으로 변경
        emdongNm: searchInputText,
        clCd: 31,
      },
    };
    axios(option).then(function ({ data }) {
      console.log(data);
      setHospitalList(data.response.body.items.item);
    });
  };
  return (
    <div>
      <AppHeader title={"병원 검색"}></AppHeader>
      <input onChange={handleChange}></input>
      <button onClick={sendRequest}>조회</button>
      <SearchResult hospitalList={hospitalList}></SearchResult>
    </div>
  );
};

export default HospitalSearchPage;
