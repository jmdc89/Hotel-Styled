import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { redTheme, greenTheme, blueTheme } from "./components/themes";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Content from "./components/Content";

function App() {
  return (
    <ThemeProvider theme={redTheme}>
      <main>
        <Navbar>
          <Button>toggle theme</Button>
        </Navbar>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;
