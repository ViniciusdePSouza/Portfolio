import { styled } from "styled-components";

export const Container =styled.div`
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

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

    position: relative;
  }
`;

export const TitleDiv = styled.div`
  position: relative;

  width: 100%;
  > div {
    height: 100%;
    filter: blur(100px);
    width: 100%;
    background-image: linear-gradient(
        278deg,
        rgba(255, 156, 84, 0.4) 0%,
        rgba(255, 255, 255, 0.22) 45.99%,
        rgba(0, 0, 0, 0) 100%
      ),
      radial-gradient(
        104.42% 95.46% at 42.78% 42.58%,
        #621abe 0%,
        rgba(36, 33, 75, 0) 100%
      );

    position: absolute;
  }

  > h2 {
    font-size: 4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

    opacity: 0.4;

    text-align: center;

    margin-bottom: 10rem;
  }

  > p {
    text-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    opacity: 0.8;
    backdrop-filter: blur(3px);

    font-size: 9.6rem;
    font-weight: 900;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

    text-align: center;

    opacity: 0.3;

    line-height: 9rem;

    margin-top: 5.6rem;
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
