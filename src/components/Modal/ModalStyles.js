import styled from "styled-components";

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 6px;
  font-weight: 600;
  padding-top: 1.8rem;
`;

export const StyledModal = styled.div`
  background: #0f1624;
  width: 85rem;
  height: 42rem;
  border-radius: 10px;
  padding: 8px;
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;