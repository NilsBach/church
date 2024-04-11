import logo from './logo.svg';
import './AppOutput.css';
import { Button } from "flowbite-react";
import { Alert } from "flowbite-react";



function App() {
  return (
    <div>
    <p className='text-red-900'> Hallo Test Seite :) </p>
    <div className="flex flex-wrap gap-2">
      <Button onClick={function handleClick(){
            return(
               <Alert color="info">
                <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
              </Alert>
            );
      } }>Click me</Button>
    </div>    <div>
      <p> TEST</p>
    </div>
    </div>

  );
}



export default App;