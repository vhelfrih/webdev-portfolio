import styled from "styled-components"

export const Resume = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    margin: 20px 0 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    max-width: 500px;
    margin: 24px auto;
  }
`