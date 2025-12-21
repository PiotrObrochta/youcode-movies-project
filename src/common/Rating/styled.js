import styled, { css } from "styled-components";

export const RateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 8px;
    grid-row-gap: 16px;
    align-items: center;
    margin-bottom: 16px;
    color: #fff;

    ${({ $description }) => $description && css`
        color: #000;
        grid-template-columns: repeat(4, auto);
        width: fit-content;
        margin-bottom: 0px;
    `}
`

export const RateNumber = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 100%;

    ${({ $description }) => $description && css`
        font-size: 22px;
    `}
`

export const SmallerText = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;

    ${({ $alignEnd }) => $alignEnd && css`
        align-self: flex-end;
        margin-bottom: 6px;
    `}

    ${({ $votes }) => $votes && css`
        grid-column: span 3;
        justify-self: start;

        ${({ $description }) => $description && css`
        grid-column: 4;
        align-self: flex-end;
        margin-left: 4px;
        `}
    `}

    ${({ $description }) => $description && css`
        font-size: 14px;
        margin-bottom: 2px;
    `}
`