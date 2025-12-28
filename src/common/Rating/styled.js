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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-bottom: 0px;
        grid-template-columns: repeat(4, auto);
        grid-column-gap: 2.5px;
    }
`

export const RateNumber = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 100%;

    ${({ $description }) => $description && css`
        font-size: 22px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
        font-weight: 600;
    }
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
    `}

    ${({ $description }) => $description && css`
        font-size: 14px;
        margin-bottom: 2px;
    `}

     ${({ $description, $votes }) => $description && $votes && css`
        grid-column: 4;
        align-self: flex-end;
        margin-left: 4px;
        `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 10px;

        ${({ $alignEnd }) => $alignEnd && css`
        align-self: flex-end;
        margin-bottom: 0px;
        `}

        ${({ $description }) => $description && css`
        display: none;
    `}

        ${({ $votes }) => $votes && css`
        grid-column: 4;
        justify-self: start;
        align-self: flex-end;
        margin-left: 4px;
        `}

        ${({ $description, $votes }) => $description && $votes && css`
        display: block;
        font-size: 13px;
        color: #7E839A;
        margin-bottom: 0px;
        line-height: 120%;
        margin-left: 7px;
    `}
    }
`