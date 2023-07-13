import React from "react";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";

const HospitalSearchPage = () => {
  const sendRequest = () => {
    const option = {
      method: "GET",
      url: "http://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1",
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==",
      },
    };
    axios(option).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <AppHeader title={"병원 검색"}></AppHeader>
      <input></input>
      <button onClick={sendRequest}>조회</button>
    </div>
  );
};

export default HospitalSearchPage;
