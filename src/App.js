import './App.css';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';


function App() {
  return (
    <>
              <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Sign_Up" element={<Sign_Up/>}/>
              </Routes>
            
        </BrowserRouter>
          </>
  );
}

export default App;
