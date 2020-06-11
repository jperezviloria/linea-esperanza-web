import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }

  img{
    width: 70px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src= "https://fotos.subefotos.com/a04e21cd0e1096bd1b6a63d970d097abo.png" alt=""/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
