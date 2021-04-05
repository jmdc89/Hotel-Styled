import styled from "styled-components";
import image3 from "../images/image3.jpg";

const Hero = styled.div`
  min-height: ${(props) => (props.big ? "100vh" : "50vh")};
  background-image: url(${(props) => (props.img ? props.img : image3)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Hero;
