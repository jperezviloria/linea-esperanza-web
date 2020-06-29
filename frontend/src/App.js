require("dotenv").config();
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Psicologos from "./components/Psicologos";
import Formulario from "./components/Formulario";
import Nosotros from "./components/MisionVOA";
import Contacto from "./components/Contacto";
import Navbar from "./components/Nav";


import {Fondo} from "./css/style";


function App() {
  return (
    <Router>
    <Fondo className="App">
       {/* <Header/> */}
       <Navbar/>
       <Switch>
        <Route path="/" exact component = {Inicio}/>
        <Route path = "/psicologos" component = {Psicologos}/> 
        <Route path = "/formulario" component = {Formulario}/>  
        <Route path = "/nosotros" component = {Nosotros}/>
        <Route path = "/contacto" component = {Contacto}/> 
      </Switch>
    </Fondo>
    </Router>
  );
}

export default App;
