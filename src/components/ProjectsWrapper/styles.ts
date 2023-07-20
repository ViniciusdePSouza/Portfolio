import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2.4rem;

  margin: 12rem 0;

  @media (max-width: 768px) {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    
  }
`;

export const FormatDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const LinkButton = styled.a`
  all: unset;

  border-radius: 8px;

  cursor: pointer;

  padding: 2rem;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: "Inter", sans-serif;

  > h2 {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > span {
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: 8px;
  padding: 2rem;

  > img {
    width: 40rem;
    height: 20rem;

    object-fit: cover;

    margin-bottom: 2rem;
  }
`;
