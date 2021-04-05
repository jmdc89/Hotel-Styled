import styled from "styled-components";

const screen = {
  phone: (...args) => {
    const styles = args;

    return `@media (min-width:900px){
            ${styles};
        }`;
  },
};

export const Banner = styled.div`
  background: red;
  h1 {
    color: white;
    text-transform: uppercase;
  }
  ${screen.phone`background:blue;h1{
      color:yellow
  }`}/* @media (min-width: 576px) {
    background: blue;
    h1 {
      color: yellow;
      text-transform: uppercase;
    }
  } */
`;

export const SecondBanner = styled.div`
  background: blue;
  h1 {
    color: red;
    text-transform: uppercase;
  }
  @media (min-width: 576px) {
    background: green;
    h1 {
      color: blue;
      text-transform: uppercase;
    }
  }
`;
