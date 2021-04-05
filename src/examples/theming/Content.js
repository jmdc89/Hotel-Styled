import React from "react";
import styled from "styled-components";

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ullamcorper arcu in orci dictum interdum. Duis efficitur diam
        ullamcorper, vulputate urna quis, maximus ipsum. Phasellus eu lorem in
        mi pretium placerat. Praesent feugiat nulla lorem, sed condimentum augue
        placerat vitae. Aenean eu libero purus. Vivamus euismod diam vitae
        turpis scelerisque, ut molestie odio hendrerit. Pellentesque non congue
        quam. Vestibulum sollicitudin ante pellentesque massa lacinia aliquam.
        Nam eget luctus lorem. Morbi gravida hendrerit hendrerit.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${(props) => `background:${props.theme.secondaryColor}`};
  ${(props) => `color:${props.theme.primaryColor}`};
`;
