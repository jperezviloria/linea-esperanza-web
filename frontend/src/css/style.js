import styled from "styled-components";

//<----------------------------------------------FONDO DE PANTALLE-------------------------------------->

export const Fondo = styled.div`
  background-color: #ecfbfc;
  padding-bottom: 10px;
  
`;

//<-------------------------------------------COMPONENTE HEADER------------------------------------------->

export const HeaderBase = styled.div`
  display: grid;
  grid-template-columns: 52% repeat(4, 12%);
  margin: 0 auto;
  width: 100%;
  background-color: #75daad;
  font-family: "Farro", sans-serif;

  img {
    width: 100px;
    padding-left: 10px;
  }

  @media only screen and (min-width: 480px) {
    img {
      width: 150px;
      padding-left: 10px;
    }
  }
`;

//<-------------------------------------------COMPONENTE NAVBAR HEADER------------------------------------------->

export const NavbarBase = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #75daad;
  align-items: center;
  font-family: "Farro", sans-serif;

  ul {
    display: flex;
    width: 40%;
    justify-content: space-around;

    position: absolute;
    right: 0px;
    height: 92vh;
    top: 80px;
    background-color: #75daad;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.5 ease-in;
  }

  li {
    list-style: none;
    opacity: 0;
  }

  a {
    text-decoration: none;
    list-style: none;
    color: white;
    font-weight: 900;
    font-size: 20px;
    color: red;
  }

  img {
    width: 80px;
  }

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    ul {
      position: none;
      right: 5%;
      height: auto;
      top: auto;

      width: 30%;
      flex-direction: row;
      align-items: center;
      transform: translateX(0);
    }

    li {
      opacity: 100%;
    }
    div {
      width: 350px;
    }
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
export const NavbarIcon = styled.div`
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
  }

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

//<-------------------BOTONES HEADER---------------->

export const BaseBoton = styled.div`
  text-decoration: none;
  color: black;
  width: 60%;

  background-color: #f9f9f9;
  border: 4px solid #127681;
  text-align: center;
  border-radius: 15px;
  padding: 1px;
  font-size: 10px;
  height: 20px;
  line-height: 10px;

  &:hover {
    font-weight: 900;
    background-color: #beebe9;
  }

  @media only screen and (min-width: 1200px) {
    width: 85%;
  }
`;

export const EnlaceBaseBoton = styled.a`
  text-decoration: none;
  color: black;
  line-height: 20px;
  margin: auto 0;

  &.externo {
    margin: 0 auto;
    background-color: red;
  }
`;

//<-------------------------------------------COMPONENTE INICIO------------------------------------------->

//<--------MENSAJE INTRODUCTORIO-------->

export const TextoIntroductorio = styled.div`
  margin: 0 auto;
  font-family: "Noto Sans JP", sans-serif;
  background-color: #f9f9f9;
  border: 6px solid #127681;
  border-radius: 15px;
  margin-top: 90px;
  text-align: justify;

  width: 70%;
  font-size: 15px;
  padding: 28px;
  

  @media only screen and (min-width: 310px) {
    width: 70%;
    font-size: 20px;
    padding: 28px;
  }

  @media only screen and (min-width: 480px) {
    width: 60%;
    font-size: 30px;
    padding: 60px;
    
  }
`;

export const BotonFormulario = styled.div`
  text-decoration: none;
  color: black;
  margin: 0 auto;
  width: 80%;
  background-color: #bbf1c8;
  text-align: center;
  border-radius: 15px;
  padding: 5px;
  margin-top: 100px;
  font-weight: 800;
  border: 5px solid #127681;

  a {
    text-decoration: none;
    color: black;
  }
`;

//<--------AVISO MENSAJE INTRODUCTORIO------>

export const AvisoBase = styled.div`
  font-family: "Farro", sans-serif;
  display: grid;
  border: 5px solid #f0a500;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 30px auto;
  border-radius: 15px;
  box-shadow: 1px 0 10px #f0a500;
  grid-template-columns: 40% 60%;

  height: 70px;
  padding-right: 20px;
  width: 50%;
  gap: 5px;

  img {
    width: 35px;
  }
  p {
    font-size: 12px;
  }

  @media only screen and (min-width: 310px) {
    img {
      width: 50px;
    }
    p {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 480px) {
    height: 80px;
    padding-right: 20px;
    width: 40%;

    img {
      width: 60px;
    }
    p {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 100px;
    padding-right: 20px;
    width: 30%;

    img {
      width: 80px;
    }
    p {
      font-size: 20px;
    }
  }
`;

//<------------BARRA ORGANIZACIONES------->

export const BarraFondo = styled.div`
  display: grid;
  justify-content: space-evenly;
  background-color: #75daad;
  margin-top: 30px;

  grid-template-columns: repeat(3, 25%);

  img {
    width: 50px;
    align-self: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: 310px) {
    img {
      width: 80px;
      align-self: center;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 480px) {
    img {
      width: 100px;
    }
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 150px;
    }
  }
  @media only screen and (min-width: 1024px) {
    img {
      width: 200px;
    }
  }
`;
//<------BOTON ESPECIAL PARA LLEVAR AL FORMULARIO--------->

export const BotonParaFormularioEstilo = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  gap: 10px;
  border-radius: 15px;
  margin: 30px auto;
  width: 80%;
  display: grid;
  a {
    text-align: center;
    font-family: "Noto Sans JP", sans-serif;
    padding: 10px 10px;
    background-color: #e8e4e1;
    border: 3px solid black;
    border-radius: 25px;
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 800;
    text-decoration: none;
    color: black;
  }

  @media only screen and (min-width: 768px) {
    width: 60%;
    a {
      font-size: 24px;
    }
  }
`;

//<------TARJETAS DE VER A PSICO  Y CONTACTOS--------->

export const InvitacionTarjetaIndex = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  background-color: #bbf1c8;
  display: grid;
  gap: 10px;
  border-radius: 15px;
  border: 2px solid black;
  justify-items: center;
  margin: 30px auto;
  width: 90%;

  p {
    margin: 0;
    font-size: 20px;
    font-weight: 900;
  }

  img {
    width: 80px;
  }

  a {
    text-align: center;
    font-family: "Noto Sans JP", sans-serif;
    padding: 5px 5px;
    background-color: #e8e4e1;
    border: 3px solid black;
    border-radius: 25px;
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 800;
    width: 80%;
    text-decoration: none;
    color: black;
  }

  @media only screen and (min-width: 310px) {
    p {
      font-size: 40px;
    }

    img {
      width: 120px;
    }

    a {
      padding: 10px 10px;

      font-size: 20px;
    }
  }

  @media only screen and (min-width: 480px) {
    p {
      font-size: 30px;
    }
    img {
      width: 100px;
    }
    a {
      padding: 5px 20px;
    }
  }
  @media only screen and (min-width: 1024px) {
    img {
      width: 200px;
    }

    a {
      padding: 5px 10px;
      text-align: center;
      margin: 5px auto;
      justify-self: center;
    }
  }
`;

//<------ FONDO TARJETAS DE VER A PSICO  Y CONTACTOS--------->

export const InvitacionFondoIndex = styled.div`
  @media only screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
`;

//<------------------------------------------------ COMPONENTE PSICOLOGOS----------------------------------------->

//<------ TARJETAS INDIVIDUALES--------->

export const TarjetaPresentacion = styled.div`
  background-color: #bbf1c8;
  font-family: "Farro", sans-serif;
  font-weight: 700;
  text-align: center;
  border: 7px solid #127681;
  border-radius: 30px;

  width: 80px;
  height: 200px;
  margin-top: 50px;

  p {
    &.nombre {
      font-size: 12px;
    }
    &.rol {
      margin-top: 0;
      font-size: 10px;
      text-decoration: underline;
    }
  }

  img {
    &.perfil {
      width: 70px;
      height: 70px;
      border-radius: 100px;
    }
    &.bandera {
      width: 20px;
      border-radius: 10px;
    }
  }

  @media only screen and (min-width: 310px) {
    width: 130px;
    height: 200px;

    img {
      &.perfil {
        width: 80px;
        height: 80px;
        border-radius: 100px;
      }
    }

    p {
      &.rol {
        font-size: 12px;
      }
    }
  }

  @media only screen and (min-width: 480px) {
    width: 70%;
    height: 270px;
    margin-top: 100px;

    p {
      &.nombre {
        font-size: 18px;
      }
      &.rol {
        font-size: 16px;
      }
    }

    img {
      &.perfil {
        width: 90px;
        height: 90px;
      }
      &.bandera {
        width: 25px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
    height: 350px;
    margin-top: 100px;

    p {
      &.nombre {
        font-size: 19px;
      }
      &.rol {
        font-size: 18px;
      }
    }

    img {
      &.perfil {
        width: 150px;
        height: 150px;
      }
      &.bandera {
        width: 30px;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 85%;
    height: 400px;
    margin-top: 100px;

    p {
      &.nombre {
        font-size: 20px;
      }
      &.rol {
        font-size: 22px;
      }
    }

    img {
      &.perfil {
        width: 170px;
        height: 170px;
      }
      &.bandera {
        width: 30px;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 85%;
    height: 420px;
    margin-top: 100px;

    p {
      &.nombre {
        font-size: 22px;
      }
      &.rol {
        font-size: 22px;
      }
    }

    img {
      &.perfil {
        width: 180px;
        height: 180px;
      }
      &.bandera {
        width: 35px;
      }
    }
  }
`;
export const BanderaUbicacion = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  grid-template-columns: 55% 10%;
  margin-top: 0;
  font-size: 8px;
  @media only screen and (min-width: 345px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 480px) {
    font-size: 14px;
    grid-template-columns: 55% 10%;
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    grid-template-columns: 55% 10%;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 10px;
    grid-template-columns: 60% 10%;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 5px;
    grid-template-columns: 65% 10%;
  }
`;

//<------ MOSTRAR TODOS LOS PSICOLOGOS--------->

export const PsicologosMostrarBase = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

//<------------------------------------------------ COMPONENTE FORMULARIO----------------------------------------->

export const FormularioBase = styled.div`
  font-family: "Farro", sans-serif;
  margin: 0 auto;
  border-radius: 100px;

  width: 90%;
  margin-top: 50px;
  padding-top: 100px;

  h1 {
    background-color: #80bdab;
    margin: 0;
    padding: 0;
    text-align: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size: 20px;
    padding: 10px 0;
  }
  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 70%;
  }

  @media only screen and (min-width: 1200px) {
    width: 75%;
  }
`;

export const FormularioTabla = styled.form`
  background-color: #bbf1c8;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-bottom: 5px;

  h2 {
    font-size: 16px;
    text-align: center;
    width: 80%;
    margin: 50px auto 10px;
  }

  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 20px;
      width: 60%;
    }
  }
`;

export const FormularioAtributos = styled.div`
  display: grid;

  &.columna-uno {
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 32%);
    text-align: center;
    padding-top: 25px;
    margin-bottom: 65px;
  }

  &.columna-dos {
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 32%);
    text-align: center;
    margin-top: 25px;
    margin-bottom: 65px;
  }

  @media only screen and (min-width: 768px) {
    &.columna-uno {
      grid-template-columns: repeat(2, 40%);
      justify-content: center;
      grid-template-rows: repeat(2, 55%);
      margin-bottom: 0;
    }

    &.columna-dos {
      grid-template-columns: repeat(2, 40%);
      justify-content: center;
      grid-template-rows: repeat(2, 55%);
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &.columna-uno {
      padding-top: 25px;
    }
    &.columna-dos {
      margin-bottom: 65px;
    }
  }

  @media only screen and (min-width: 1200px) {
    &.columna-uno {
      grid-template-columns: repeat(4, 25%);
      text-align: center;
      padding-top: 50px;
    }

    &.columna-dos {
      grid-template-columns: repeat(4, 25%);
      text-align: center;
      margin-top: 80px;
    }
  }
`;

export const FormularioOpciones = styled.select`
  background-color: #f4f6ff;
  border: 2px solid #127681;
  box-shadow: 2px 1px 2px #3f3f44;
  width: 160px;

  display: grid;
  border-radius: 12px;
  text-align: center;
  padding: 8px 30px;
  font-size: 14px;

  margin: 0 auto;

  @media only screen and (min-width: 310px) {
    width: 240px;
  }

  @media only screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const Inputs = styled.textarea`
  background-color: #f4f6ff;
  border-radius: 10px;
  padding: 2px 0;
  border: 2px solid #127681;
  box-shadow: 2px 1px 2px #3f3f44;
  text-align: center;
  font-family: "Balsamiq Sans", cursive;
  width: 160px;

  &.contar {
    display: grid;
    justify-self: center;
    padding: 30px 10px;
    text-align: center;
    margin: 0 auto;
    width: 130px;
  }

  &.inputEdad {
    width: 72px;
  }

  @media only screen and (min-width: 310px) {
    border-radius: 20px;
    padding: 8px 40px;
    border: 4px solid #127681;
    box-shadow: 2px 1px 2px #3f3f44;

    &.contar {
      display: grid;
      justify-self: center;
      padding: 50px 10px;
      text-align: center;
      margin: 0 auto;
      width: 200px;
    }
    &.inputEdad {
      width: 35px;
    }
  }
  @media only screen and (min-width: 480px) {
    &.contar {
      padding: 40px 70px;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 10px 1rem;
    font-size: 11px;

    &.contar {
      padding: 30px 70px;
    }

    &.inputEdad {
      height: 36px;
    }
  }
`;

export const OpcionesFormulario = styled.select`
  background-color: #f4f6ff;
  border: 2px solid #127681;
  box-shadow: 2px 1px 2px #3f3f44;
  border-radius: 15px;

  &.opcionesSexo {
    padding: 8px 0;
    margin-right: 10px;
  }

  &.opcionesPais {
    width: 170px;
    padding: 5px 20px;
  }

  @media only screen and (min-width: 310px) {
    border: 3px solid #127681;

    &.opcionesSexo {
      padding: 15px 14px;
      margin-right: 10px;
    }

    &.opcionesPais {
      width: 250px;
      padding: 10px 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    &.opcionesPais {
      padding: 16px 20px;
    }
  }
  @media only screen and (min-width: 1200px) {
    &.opcionesSexo {
      padding: 20px 14px;
    }

    &.opcionesPais {
      width: 210px;
      padding: 17px 20px;
    }
  }
`;

export const EspacioCompartido = styled.div`
  display: grid;
  justify-self: center;

  &.AreaConTelefono {
    grid-template-columns: 30% 60%;
    gap: 9px;

    input {
      text-align: center;
      border: 2px solid #127681;
      box-shadow: 2px 1px 2px #3f3f44;
      border-radius: 15px;
      padding: 5px 1px;
      margin: 2px;

      &.celularTelefono {
        width: 110px;
      }
      &.codigoTelefono {
        width: 40px;
      }

      @media only screen and (min-width: 310px) {
        padding: 10px 3px;
        border: 3px solid #127681;

        &.celularTelefono {
          width: 150px;
        }
        &.codigoTelefono {
          width: 60px;
        }
      }
      @media only screen and (min-width: 1200px) {
        padding: 16px 1px;
        border: 3px solid #127681;

        &.celularTelefono {
          width: 120px;
        }
        &.codigoTelefono {
          width: 50px;
        }
      }
    }
  }

  &.SexoEdad {
    grid-template-columns: repeat(2, 50%);
    justify-self: center;
    gap: 5px;
  }
`;

export const FormularioEnviar = styled.button`
  display: grid;
  text-align: center;
  padding: 10px 10px;
  border-radius: 15px;
  margin: 50px auto;
  font-weight: 900;
  border: 4px solid #127681;

  &:hover {
    background-color: #ecfbfc;
  }


  
  @media only screen and (min-width: 310px) {
    padding: 10px 80px;
    margin: 50px auto;
    font-weight: 900;
  }

  @media only screen and (min-width: 1200px) {
    padding: 10px 200px;
  }
`;

export const Popup = styled.div`

  /* Popup box BEGIN */
.hover_bkgr_fricc{
    background:rgba(0,0,0,.4);
    cursor:pointer;
    display:none;
    height:100%;
    position:fixed;
    text-align:center;
    top:0;
    width:100%;
    z-index:10000;
}
.hover_bkgr_fricc .helper{
    display:inline-block;
    height:100%;
    vertical-align:middle;
}
.hover_bkgr_fricc > div {
    background-color: #fff;
    box-shadow: 10px 10px 60px #555;
    display: inline-block;
    height: auto;
    max-width: 551px;
    min-height: 100px;
    vertical-align: middle;
    width: 60%;
    position: relative;
    border-radius: 8px;
    padding: 15px 5%;
}
.popupCloseButton {
    background-color: #fff;
    border: 3px solid #999;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    font-family: arial;
    font-weight: bold;
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 25px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    text-align: center;
}
.popupCloseButton:hover {
    background-color: #ccc;
}

`


//<------------------------------------------------ MISION VISION OBJETIVO ALCANCE----------------------------------------->

export const MVOABase = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  margin-top: 50px;
  padding-top: 100px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const MVOARecuadro = styled.div`
  width: 80%;

  background-color: #f9f9f9;

  border-radius: 20px;
  border: 10px solid #f0a500;
  box-shadow: 1px 2px 10px #393e46;
  margin-bottom: 20px;

  p {
    width: 70%;
    margin: 20px auto;

    &.subtitulo {
      text-align: center;
      font-size: 25px;
      font-weight: 900;
    }
    &.descripcion {
      font-weight: 500;
      font-size: 16px;
      text-align: justify;
    }
  }

  @media only screen and (min-width: 1200px) {
    border: 15px solid #f0a500;
    box-shadow: 2px 4px 10px #393e46;

    p {
      width: 80%;
      margin: 30px auto;

      &.subtitulo {
        font-size: 30px;
      }
      &.descripcion {
        font-size: 17px;
      }
    }
  }
`;

//<------------------------------------------------ COMPONENTE CONTACTO----------------------------------------->

//<------ COMPONENTE NATIVO CONTACTO--------->

export const ContactoEstructura = styled.div`
  margin-top: 50px;
`;

//<------ MENSAJE CONTACTO--------->

export const ContactoMensajeBase = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  padding-top: 100px;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 50%);
  }
`;
export const InfoContacto = styled.div`
  width: 85%;
  height: 250px;
  border-radius: 65px;
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  border: 6px solid #127681;
  margin-bottom: 20px;

  div {
    margin-top: 0px;
    justify-content: center;

    &.mail {
      display: grid;
      grid-template-columns: 100%;
      justify-content: start;
    }

    &.numero {
      
      display: grid;
      grid-template-columns: 100%;
    }

    button {
      
      font-size: 10px;
      padding: 1px 5px;
      border-radius: 20px;
      border: 2px solid #127681;
    }
  }

  p {
    font-weight: 900;

    &.titulo {
      font-size: 16px;
      width:80%;
      margin: 10px auto;
    }

    &.informacion {
      font-size: 8px;
    }
  }

  img {
    width: 50px;
  }

  @media only screen and (min-width: 310px) {
    height: 300px;

    div {
      margin-top: 10px;

      &.mail {
        grid-template-columns: 65% 10%;
      }
      &.numero {
          
        line-height: 30px;
        grid-template-columns: 35% 20%;
      }
    }

    p {
      font-weight: 900;

      &.titulo {
        font-size: 20px;
      }

      &.informacion {
        font-size: 8px;
      }
    }

    img {
      width: 100px;
    }
  }

  @media only screen and (min-width: 480px) {
    p {
      &.informacion {
        font-size: 12px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    p {
      &.informacion {
        font-size: 10px;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 80%;
    height: 400px;

    p {
      &.titulo {
        font-size: 40px;
      }

      &.informacion {
        font-size: 15px;
      }
    }

    img {
      width: 130px;
    }
  }
`;
