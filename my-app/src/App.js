import './AppOutput.css';
import { Navbar } from "flowbite-react";
import Home from './routes/Home';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import Page3 from './routes/Page3';

function App() {
  let sub_site
  switch(window.location.pathname){
    case "/":
      sub_site = <Home />
      break
      case "/page1":
        sub_site = <Page1 />
        break
        case "/page2":
          sub_site = <Page2 />
          break  
          case "/page3":
            sub_site = <Page3 />
            break 
  }
  return (
    <div> 
      <div>
       {navbar()}
      </div>
      <div className = "bg-stone-900 flex flex-col h-screen text-white">
        {sub_site}
      </div>  
    </div>
  );
}
function navbar(){
    const path = window.location.pathname;
    return(
          <Navbar fluid className= "text-white bg-stone-800 rounded-t-md">
            <Navbar.Brand href="/">
              <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Cross" />
              <span className="self-center whitespace-nowrap text-xl font-semibold">Evangelisch Freikirchliche Gemeinde | Baptisten</span>
            </Navbar.Brand>
            <Navbar.Collapse > 
              <Navbar.Link  href="/" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="/page1"className = "text-white">YOPE</Navbar.Link>
              <Navbar.Link href="/page2"className = "text-white">Services</Navbar.Link>
              <Navbar.Link href="/page3"className = "text-white">Pricing</Navbar.Link>
              <Navbar.Link href="#"className = "text-white">Contact</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
              

        );
}

export default App;