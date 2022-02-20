import styled from "styled-components";

export const FormWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: calc(100vw - 96px);
  max-width: 800px;
  margin: 1rem auto;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const Form = styled.form`
  border: none;
  padding: 20px;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const MessageInput = styled.textarea`
  padding: 0.5em;
  color: black;
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 12rem;
  margin-bottom: 0.5em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.button`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  margin: 1.8rem;
  background: #6b3030;
  border-radius: 15px;
  border: none;
  transition: 0.5s;
  transiti1on: 0.2s;
  &:hover {
    background: #801414;
  }
`;
