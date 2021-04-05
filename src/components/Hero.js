import styled from "styled-components";

const Hero = styled.div`
  min-height: 100vh;
  background-image: url(${(props) => props.img});
`;

export default Hero;
