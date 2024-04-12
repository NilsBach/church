import './AppOutput.css';
import { Navbar } from "flowbite-react";
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import Page3 from './routes/Page3';
import { Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div> 
      <div>
       {navbar()}
      </div>
      <div>
           <Routes>
           <Route path="/" element={<Home />} />
              <Route path="/Page1" element={<Page1 />} />
              <Route path="/Page2" element={<Page2 />} />
              <Route path="/Page3" element={<Page3 />} />
            </Routes>
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
              <Navbar.Link as={Link} href="/" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="/page1">YOPE</Navbar.Link>
              <Navbar.Link href="/page2">Services</Navbar.Link>
              <Navbar.Link href="/page3">Pricing</Navbar.Link>
              <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
              

        );
}

export default App;