import './AppOutput.css';
import { Navbar } from "flowbite-react";
import Startseite from './routes/Startseite';
import Gottesdienst from './routes/Gottesdienst';
import YOPE from './routes/YOPE';
import Gemeindebrief from './routes/Gemeindebrief';
let subsiteArray;
subsiteArray.append( {
  name: 'Startseite',
  path: '/'
} );
subsiteArray.append( {
  name: 'Gottesdienst',
  path: '/gottesdienst'
} );
subsiteArray.append( {
  name: 'YOPE',
  path: '/yope'
} );
subsiteArray.append( {
  name: 'Gemeindebrief',
  path: '/gemeindebrief'
} );



function App() {
  let sub_site
  switch(window.location.pathname){
  case subsiteArray[0].path:
    sub_site = < Startseite />
    break
  case subsiteArray[1].path:
    sub_site = < Gottesdienst />
    break
  case subsiteArray[2].path:
    sub_site = < YOPE />
    break  
  case subsiteArray[3].path:
    sub_site = < Gemeindebrief />
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


function addNavbarElements(){
  for (let i = 0; i < subsiteArray.length; i++) {
    return(
      <Navbar.Link href={subsiteArray[i].path}className = "text-white"> {subsiteArray[i].name} </Navbar.Link>
    )
  }
};

function navbar(){
    const path = window.location.pathname;
    return(
          <Navbar fluid className= "text-white bg-stone-800 rounded-t-md">
            <Navbar.Brand href="/">
              <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Cross" />
              <span className="self-center whitespace-nowrap text-xl font-semibold">Evangelisch Freikirchliche Gemeinde | Baptisten</span>
            </Navbar.Brand>
            <Navbar.Collapse > 
              { addNavbarElements()}
            </Navbar.Collapse>
          </Navbar>
              

        );
}

export default App;