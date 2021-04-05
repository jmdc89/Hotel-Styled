import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { redTheme, greenTheme, blueTheme } from "./components/themes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={redTheme}>
      <main>
        <Navbar />
      </main>
    </ThemeProvider>
  );
}

export default App;
