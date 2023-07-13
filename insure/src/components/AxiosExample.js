import React from "react";
import axios from "axios";

const AxiosExample = () => {
  const handleClick = () => {
    axios
      .get(
        "https://apis.data.go.kr/1160100/service/GetMedicalReimbursementInsuranceInfoService/getInsuranceInfo?serviceKey=uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ%3D%3D&resultType=json"
      )
      .then(function ({ data }) {
        // handle success
        console.log(data);
      });
  };
  return (
    <div>
      <button onClick={handleClick}>조회하기</button>
    </div>
  );
};

export default AxiosExample;
