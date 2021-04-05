import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h2>company name</h2>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  background: ${(props) => props.theme.primaryColor};
  ${(props) => `color:${props.theme.secondaryColor}`};
`;

export default Navbar;
