import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    margin-top: 64px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    align-items: start;
    justify-items: start;
    justify-content: start;
    grid-column-gap: 40px; 
    max-height: 544px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding: 16px;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        max-height: none;
        height: auto;
        grid-template-areas:
        "poster info"
        "overview overview";
    }
`

export const PosterWrapper = styled.div`
    height: 100%;
    max-height: 464px;
    grid-row: span 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        max-height: 169px;
        grid-area: poster;
    }
`

export const Poster = styled.img`
    object-fit: cover;
    height: 100%;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        max-height: 169px;
    }
`

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: fit-content;
    padding: 8px 0px 0px;
    grid-row-gap: 24px;
    margin-bottom: 24px;
    max-width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding: 0px;
        grid-row-gap: 8px;
        grid-area: info;
    }
`

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 16px;
        font-weight: 500;
    }
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
        color: ${({ theme }) => theme.colors.lightGray};
        margin-right: 10px;
    `}

    ${({ $overview }) => $overview && css`
        font-size: 20px;
        line-height: 160%;
        overflow: auto;
        max-height: 100%;
        padding-right: 10px;

        &::-webkit-scrollbar {
            width: 8px; 
             height: 8px; 
        }   

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.blackNav};
            border-radius: 4px;
        }


        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.colors.blackNav};
            border-radius: 4px;
        }
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.lynch};

        ${({ $label }) => $label && css`
            font-size: 12px;
            color: ${({ theme }) => theme.colors.blackNav};
        `}

        ${({ $overview }) => $overview && css`
            font-size: 14px;
            overflow: visible;
            grid-area: overview;
            color: ${({ theme }) => theme.colors.blackNav};
            `}

        ${({ $greyColor }) => $greyColor && css`
            display: none;
        `}
    }
`

export const LabelsContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
`

export const GenresContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        gap: 8px;
    }
`

export const Genre = styled.div`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 10px;
        line-height: 110%;
        padding: 4px 8px;
    }
`