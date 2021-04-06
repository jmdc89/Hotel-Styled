import styled from "styled-components";
import homeImg from "../../images/homeBcg.jpeg";
import { setFlex, setBackground } from "../../styles";

const Hero = styled.header`
  min-height: 100vh;
  /* background: url(${(props) => props.img || homeImg}) center/cover fixed
    no-repeat; */
  /* ${setBackground()}; */
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,0.1)" })};
  ${setFlex({ x: "center", y: "center" })};
`;

export default Hero;
