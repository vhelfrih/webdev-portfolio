import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { ScrollIconContainer } from "./ScrollButtonStyles";

const ScrollButton = ({clicked}) => {
  return (
    <ScrollIconContainer>
      <button type="button" onClick={clicked}>
        <BsArrowUpCircleFill color="#6b3030" size="4rem" />
      </button>
    </ScrollIconContainer>
  );
};

export default ScrollButton;
