import { styled } from "styled-components";

export const ProfileDiv = styled.div`
    width: 100%;
    max-width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
        font-size: 4rem;
        font-weight: bold;

        color: ${({theme}) => theme.COLORS.WHITE_100};

        text-align: center;
    }

    > img {
        width: 16rem;

        margin-top: 4rem;

        border-radius: 100%;

        border: 8px solid ${({theme}) => theme.COLORS.GRAY_300};
    }
`