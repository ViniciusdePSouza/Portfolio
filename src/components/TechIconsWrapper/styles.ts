import { styled, keyframes } from "styled-components";

interface CardProps {
  index: number
}

const slideInAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr repeat(4, 1fr);
  grid-row-gap: 2.4rem; 

  margin-top: 8.8rem;
`

export const Card = styled.div<CardProps>`
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

  opacity: 0;

  animation: ${slideInAnimation} 0.5s ease-in-out;

  animation-delay: ${({ index }) => index * 0.2}s;
  animation-fill-mode: forwards;
`