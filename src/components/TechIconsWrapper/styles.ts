import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr repeat(4, 1fr);
  grid-row-gap: 2.4rem; 

  margin-top: 8.8rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 5rem;
  }

  >span {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;

    margin-top: .8rem;
    
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }
`