import styled from "styled-components";
import {ReactComponent as Danger} from "./Danger.svg"


export const Container = styled.div`
    display: grid;
    max-width: 1368px;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    justify-items: center;
    margin: 180px auto;
    
    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        margin-top: 90px
    }
`

export const DangerIcon = styled(Danger)`
    width: 120px;
    height: 120px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        width: 80px;
        height: 80px;
    }
`

export const Header = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    text-align: center;
    margin: 0px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
        font-weight: 500;
    }
`

export const Info = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    margin: 0px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        font-size: 10px;
        font-weight: 400;
    }
`

export const HomepageButton = styled.button`
    padding: 16px 24px;
    height: auto;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border: 0px;
    border-radius: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.blueHover};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.blueActive};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        font-size: 10px;
        font-weight: 400;
        padding: 8px 12px;
    }
`