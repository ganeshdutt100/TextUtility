// import logo from './logo.svg';
import './App.css';
import TextFile from './components/TextFile';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not 
  const toggleMode = () => {
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#0b2743"
      document.body.style.color="white"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="#0b2743"
    }
  }
  return (
   <>
   <Navbar mode={mode} toggleMode={
    toggleMode
   }></Navbar>
   <TextFile mode={mode}></TextFile>
   {/* <Alert ></Alert> */}
   {/* <About></About> */}
   </>
  );
}

export default App;
