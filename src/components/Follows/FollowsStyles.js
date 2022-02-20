import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 220px;
  padding: 12px 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;
   
    grid-grow:4;
   
  }

  @media ${props => props.theme.breakpoints.md} {
    height: 200px;
    padding: 6px;

    &:nth-child(2n){
      grid-grow:2;
    }
  }
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 180px;
    padding: 6px;
    
    &:nth-child(2n){
      grid-column:1;
    }
  }
`
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 18px;
    line-height: 28px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 22px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 14px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`
export const ExternalLinks = styled.a`
display: flex;
align-items: center;
justify-content: center;
color:#d4c0c0;
font-size: 4rem;
transition: 0.4s;
&:hover {
  transform: scale(1.3) translateY(-2px);
  cursor: pointer;
    color: #006241; 
}
`
export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
