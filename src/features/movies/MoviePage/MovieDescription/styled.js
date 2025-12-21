import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    margin-top: 64px;
    background-color: #fff;
    padding: 40px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    align-items: start;
    justify-items: start;
    justify-content: start;
    grid-column-gap: 40px; 
`

export const PosterWrapper = styled.div`
    height: 100%;
    grid-row: span 2;
`

export const Poster = styled.img`
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
`

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: fit-content;
    padding: 8px 0px 0px;
    grid-row-gap: 24px;
    margin-bottom: 24px;
`

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 0px;
`

export const Text = styled.p`
    font-size: 22px;
    font-weight: 400;
    line-height: 120%;
    margin: 0px;

    ${({ $label }) => $label && css`
        font-size: 18px;
    `}

    ${({ $greyColor }) => $greyColor && css`
        color: #74788B;
        margin-right: 10px;
    `}

    ${({ $overview }) => $overview && css`
        font-size: 20px;
        line-height: 160%;
    `}
`

export const LabelsContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
`

export const GenresContainer = styled.div`
    display: flex;
    gap: 16px;
`

export const Genre = styled.div`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    background-color: #E4E6F0;
    border-radius: 5px;
`