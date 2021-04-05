import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";

function App() {
  return (
    <div>
      <Hero img={image1} />
      <Hero img={image2} />
      <Hero big />
    </div>
  );
}

export default App;
