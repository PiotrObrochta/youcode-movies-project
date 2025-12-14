import styled from "styled-components";
import {ReactComponent as Image} from "./Picture.svg"


export const Container = styled.div`
    max-width: 1408px;
    margin: 56px auto;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-top: 24px;
        padding: 0px 16px;
    }
`

export const Header = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 14px;
        font-weight: 500;
    }
`

export const NoResultsImage = styled(Image)`
    max-width: 668px;
    height: auto;
    align-self: center;
    margin-top: 40px;

    @media (max-width: 768px) {
        max-width: 400px;
        margin-top: 20px;
    }
`