import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;

    > h1 {
        color: ${({theme}) => theme.COLORS.WHITE_100}
    }
` 