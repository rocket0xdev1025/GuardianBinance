import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Border from "./components/Border";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import History from "./components/History";
import Connect from "./components/Connect";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Border />
      <div id="about">
        <About />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="connect">
        <Connect />
      </div>
    </div>
  );
}

export default App;
