import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr repeat(4, 1fr);
  grid-row-gap: 2.4rem; 

  margin-top: 8.8rem;

  img {
    height: 5rem;
  }
`