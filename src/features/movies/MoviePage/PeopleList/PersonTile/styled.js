import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    background-color: #fff;
    width: fit-content;
    padding: 16px;
    text-align: center;
    max-width: 258px;
    width: 100%;
    color: #000;
    display: grid;
    align-items: start;
    grid-template-rows: auto auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding: 8px;
        max-width: 190px;
    }
    
`

export const ProfileWrapper = styled.div`
    height: 231px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 178px;
        max-width: 174px;
    }
`

export const Profile = styled.img`
    height: 100%;
    border-radius: 5px;
    width: 100%;
    object-fit: cover;
`

export const Text = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    margin: 12px 0px 0px;
    word-break: break-word;

    ${({$character}) => $character && css`
        font-size: 18px;
        font-weight: 400;
        line-height: 150%;
        color: #627489;
        margin-top: 8px;
        align-self: flex-end;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
        font-weight: 500;
        margin-top: 8px;

        ${({$character}) => $character && css`
            font-size: 13px;
            line-height: 130%;
            color: #7E839A;
            align-self: flex-end;
    `}
    }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
