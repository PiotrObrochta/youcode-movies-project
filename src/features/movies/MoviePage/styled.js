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
    max-width: fit-content;
    height: 100%;
    margin: auto;

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

export const Backdrop = styled.img`
    object-fit: cover;
    height: 100%;
`