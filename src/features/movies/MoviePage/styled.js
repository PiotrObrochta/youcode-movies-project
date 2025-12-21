import styled from "styled-components";

export const Hero = styled.div`
    width: 100%;
    height: 770px;
    background-color: black;
    text-align: center;
    overflow: hidden;
    position:relative;
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

    &::before,
    &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 20%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

    &::before {
        left: 0;
        background: linear-gradient(
        to right,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
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
`

export const Header = styled.h1`
    color: #fff;
    font-size: 64px;
    font-weight: 600;
    line-height: 120%;
    margin: 24px 0px;
`

export const Backdrop = styled.img`
    object-fit: cover;
    height: 100%;
`