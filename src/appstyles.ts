import { styled } from "styled-components";

export const ProfileDiv = styled.div`
  width: 100%;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 16rem;

    margin-top: 4rem;

    border-radius: 100%;

    border: 8px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }

  
  > h1 {
    font-size: 4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

    text-align: center;
  }

  > p {
    font-size: 9.6rem;
    font-weight: 900;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

    text-align: center;

    opacity: 0.3;

    line-height: 9rem;

    margin-top: 5.6rem;
  }

  > h2 {
    font-size: 4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

    opacity: 0.3;

    text-align: center;

    margin-bottom: 10rem;
  }
`;

export const PunchLineSpan = styled.span`
  font-size: 2rem;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.WHITE_100};

  text-align: center;

  margin-top: 8rem;
`;

export const SubPunchLineSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  text-align: center;

  margin-top: 0.8rem;
`;


