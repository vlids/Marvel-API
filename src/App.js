import React from "react";
//componentes
import MiApi from "./component/MiApi";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Portada from "./component/Portada";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App" style={{backgroundColor: '#edeff3'}}>
      <NavBar></NavBar>
      <Portada></Portada>
      
      
      <MiApi className='cardT' ></MiApi>
      <Footer></Footer>
    </div>

  );
}

export default App;
