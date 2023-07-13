import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.5rem 4rem;

  background: linear-gradient(to bottom, #0C011F, ${({ theme }) => theme.COLORS.PRIMARY});
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;

  font-size: 1.8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  &:hover{
   color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > img {
    width: 3rem;
    height: 3rem;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 2.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: 2rem;
`;

export const MailTo = styled.a`
  text-decoration: none;
  cursor: pointer;

  padding: 1.6rem 2rem;

  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 8px;

  &:hover{
    opacity: 2;
  }
`;

export const LanguageButton = styled.button`
    all: unset;
    padding: 1.6rem 2rem;
    margin-left: 3rem;

    cursor: pointer;

    > img {
    width: 4.5rem;
  }
`
