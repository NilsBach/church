import './AppOutput.css';
import { Navbar } from "flowbite-react";


function App() {
  return (
    <div> 
      <div>
       {navbar()}
      </div>
      <div>
        <p> Das hier ist mal so ein Test</p>
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
              <Navbar.Link href="/" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="/page1">YOPE</Navbar.Link>
              <Navbar.Link href="/page2">Services</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        );
}

export default App;