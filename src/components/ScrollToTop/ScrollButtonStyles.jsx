import styled from "styled-components";

export const ScrollIconContainer = styled.div`
  button {
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    z-index: 99;
    cursor: pointer;
    font-size: 1.8rem;
    background-color: inherit;
    border: none;
    display: inline-block;
    padding: 10px;
  }

  button:hover {
    bottom: 25px;
  }
`;
