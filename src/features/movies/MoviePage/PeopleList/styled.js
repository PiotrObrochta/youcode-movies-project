import styled from "styled-components";


export const Wrapper = styled.div`
    margin-top: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-top: 21px;
    }
`

export const Header = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 20px;
    }
`

export const TilesWrapper = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-top: 12px;
        gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
`