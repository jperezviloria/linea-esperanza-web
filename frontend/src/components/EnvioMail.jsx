import React, { Component } from 'react';
import styled from "styled-components";
import {Modal, ModalHeader, ModalFooter, ModalBody, Button} from "reactstrap";





const Imagen = styled.img`

  display: grid;
  width:150px;
  margin: 0 auto;
  margin-top: 50px;

`

const Base = styled.div`
text-align: center;
margin-top: 30px;
`


const BaseModel = styled.div`
text-align: center;
background-color: #94d3ac;

`


class Envio extends Component {


  state = {

    visible: true,
    modalIsOpen: false
  }


  toggleModal(){
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen 
    }); 
  };


render(){
  return (
    <Base className="App">
      <Button color = "primary" onClick = {this.toggleModal.bind(this)} type = "submit" >ENVIAR</Button>
     <Modal isOpen = {this.state.modalIsOpen}>
      <ModalHeader toggle = {this.toggleModal.bind(this)} >LINEA ESPERANZA</ModalHeader>
      <BaseModel><ModalBody >
        <h1>Felicidades</h1>
        <h4>Nos comunicaremos en el transcurso de las 48Hrs a sus contactos para anotar su cita</h4>
        
        <Imagen src = "https://i.imgur.com/JPoj7Rl.png"></Imagen>
        </ModalBody>
        </BaseModel>
      <ModalFooter>
        <Button color = "secondary">IR A INICIO</Button>
      </ModalFooter>
     </Modal>
    </Base>
  );
}
}

export default Envio;
