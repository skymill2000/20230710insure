import React from "react";
import styled from "styled-components";
import AppHeader from "./common/AppHeader";

const TextBlock = styled.div`
  color: red;
  font-size: 1.5em;
  text-align: center;
`;

const MyButton = styled.button`
  color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 16px;
  padding: 6px;
  border-radius: 10px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(
    to right,
    rgb(28, 110, 164) 0%,
    rgb(35, 136, 203) 50%,
    rgb(20, 78, 117) 100%
  );
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  border: 2px solid rgb(28, 110, 164);
  display: inline-block;
`;

const StyledComponentExample = () => {
  return (
    <div>
      <AppHeader title={"샘플 해더"}></AppHeader>
      <TextBlock>StyledComponentExample</TextBlock>
      <MyButton>내가 디자인 한 버튼</MyButton>
    </div>
  );
};

export default StyledComponentExample;
