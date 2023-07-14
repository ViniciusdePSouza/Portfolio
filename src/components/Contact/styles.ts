import { styled } from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  padding: 3.5rem 10rem;

  background-color: #121120;

  border-radius: 8px;

  -webkit-box-shadow: 10px 10px 81px 0px rgba(91, 30, 189, 1);
  -moz-box-shadow: 10px 10px 81px 0px rgba(91, 30, 189, 1);
  box-shadow: 10px 10px 81px 0px rgba(91, 30, 189, 1);
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  gap: 1.6rem;

  > img {
    width: 8rem;

    border-radius: 100%;

    border: 8px solid
      linear-gradient(75deg, #0c011f, ${({ theme }) => theme.COLORS.PRIMARY});
  }
`;

export const WppButton = styled.a`
  all: unset;

  padding: 1.2rem 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  background-color: #0c011f;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-size: 1.6rem;

  cursor: pointer;

  border-radius: 32px;
`;

export const WppIcon = styled.img`
  width: 30px;
`;

export const ContactMeDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TalkToMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.2rem;

  margin-top: 2.4rem;

  > h2 {
    font-family: "Inter", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > p {
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const SocialNetWorkDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconsDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2.6rem;
`;
export const SocialNetworkLink = styled.a`
  all: unset;
  cursor: pointer;
  > img {
    width: 30px;
  }
`;

export const MailTo = styled.a`
  all: unset;
  width: 100%;
  padding: 1.2rem 2.4rem;

  margin-top: 3.2rem;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  border-radius: 8px;

  cursor: pointer;
`;
