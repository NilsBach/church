import './AppOutput.css';
import { Navbar } from "flowbite-react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <div id="container">
      {/* adding the navbar */}
      <div id="navBar" className="bg-stone-800">
        { navbar() }
      </div>
      {/* adding the main page*/}
      <div id ="main" className="bg-stone-900 text-white">
        <p> test2</p>
      </div>
    </div>

  );
}
function navbar(){
    return(
          <Navbar fluid rounded className= "text-white bg-stone-800">
            <Navbar.Brand href="https://flowbite-react.com">
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Cross" />
              <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite React</span>
            </Navbar.Brand>
            <Navbar.Collapse>
              <Navbar.Link href="#" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="#">YOPE</Navbar.Link>
              <Navbar.Link href="#">Services</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        );
}

export default App;