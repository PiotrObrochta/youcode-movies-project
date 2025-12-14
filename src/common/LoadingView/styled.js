import styled, { keyframes } from "styled-components";
import {ReactComponent as spinner} from "./spinner.svg"


export const Container = styled.div`
    margin: 56px auto;
    max-width: 1408px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        margin-top: 24px;
        padding: 0px 16px;
    }
`

export const Header = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin: 0px;
    line-height: 120%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
        font-weight: 500;
        line-height: 130%;
    }
`

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Spinner = styled(spinner)`
    width: 91px;
    height: 91px;
    margin-top: 120px;
    align-self: center;
    animation: ${spin} 1s linear infinite;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        width: 35px;
        height: 35px;
        margin-top: 24px;
    }
`