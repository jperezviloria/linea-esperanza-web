import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/formulario">Envía el formulario</a>
        </li>
        <li>
          <a href="/psicologos">Nuestro equipo</a>
        </li>
        <li>
          <a href="/nosotros">Sobre nosotros</a>
        </li>
        <li>
          <a href="/contacto">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
