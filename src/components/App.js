import React from "react";

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
