import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img src= "https://fotos.subefotos.com/a04e21cd0e1096bd1b6a63d970d097abo.png" alt=""/></a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">INICIO</a></li>
                <li><a href="/psicologos">PSICOLOGOS</a></li>
                <li><a href="/nosotros">SOBRE NOSOTROS</a></li>
                <li><a href="/contacto">CONTÁCTANOS</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
