import styled from "styled-components";

export const Hero = styled.div`
    width: 100%;
    height: 770px;
    background-color: ${({ theme }) => theme.colors.blackNav};
    text-align: center;
    overflow: hidden;
    position:relative;
    padding: 0px 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 270px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
        height: 170px;
        padding: 0px 16px;
    }
`

export const BackdropWrapper = styled.div`
    position: relative;
    max-width: 1368px;
    height: 100%;
    margin: auto;
    background-image: url(${({ $backdropURL }) => $backdropURL});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    box-shadow: 
        inset 0 0 20px 20px rgba(0, 0, 0, 1),
        inset 0 0 10px 10px rgba(0, 0, 0, 1);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        box-shadow: 
            inset 0 0 40px 10px rgba(0, 0, 0, 1),
            inset 0 0 10px 5px rgba(0, 0, 0, 1);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
        box-shadow: 
            inset 0 0 20px 5px rgba(0, 0, 0, 0.7),
            inset 0 0 10px 5px rgba(0, 0, 0, 1);
    }

`

export const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: start;
    justify-content: end;
    flex-direction: column;
    margin-bottom: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-bottom: 8px;
    }
`

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 64px;
    font-weight: 600;
    line-height: 120%;
    margin: 24px 0px;
    text-align: left;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 24px;
        margin: 4px 0px;
    }
`

export const Backdrop = styled.img`
    object-fit: cover;
    height: 100%;
`