import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa6 } from "@fortawesome/free-solid-svg-icons"; // Replace 'faIconName' with the desired icon name

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const AppHeader = ({ title }) => {
  return (
    <HeaderContainer>
      <Icon icon={fa6} />{" "}
      {/* Replace 'faIconName' with the desired icon name */}
      {title}
    </HeaderContainer>
  );
};

export default AppHeader;
