import React, { useEffect } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);

  .modal {
    width: 390px;
    height: 400px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 2px;
    position: relative;
    padding: 10px;
    border-radius: 15px;

    animation-name: grow-modal;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;

    @keyframes grow-modal {
      0% {
        opacity: 0.2;
      }
      25% {
        opacity: 0.4;
      }
      50% {
        opacity: 0.6;
      }
      75% {
        opacity: 0.8;
      }
      100% {
        width: 400px;
        height: 400px;
        opacity: 0.9;
      }
    }

    h4 {
      text-align: center;
      color: #444;
      font-size: 1rem;
      font-weight: 100;
      font-family: "Roboto", sans-serif;
      text-align: justify;
      width: 80%;
      margin: 0 auto;
    }

    .modal-btns {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      word-spacing: 20px;

      a {
        text-decoration: none;
      }

      button {
        padding: 8px 20px;
        border-radius: 20px;
        border: 4px solid #127681;
        font-weight: 800;
      }
    }
  }

  @media only screen and (min-width: 310px) {
    .modal {
      h4 {
        font-size: 1.2rem;
      }

      .modal-btns {
        margin-top: 20px;
        button {
          padding: 8px 50px;
        }
      }
    }
  }
`;

const Imagen = styled.img`
  width: 60px;
  display: flex;

  margin: 0 auto;

  @media only screen and (min-width: 310px) {
    width: 100px;
  }
`;

const ModalError = ({ closeModal }) => {
  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    <StyledModal>
      <div ref={(node) => (modalRef = node)} className="modal">
        <h1>Oops!</h1>
        <hr />
        <h4>
        Ha habido un problema con el envío del formulario. Estamos trabajando para solucionarlo a la brevedad. Por favor, comunícate directamente con nosotros al contacto de WhatsApp
        </h4>
        <Imagen src="https://cdn.shopify.com/s/files/1/1061/1924/products/Flushed_Face_Emoji_grande.png?v=1571606037" alt="" />
        <div className="modal-btns">
          <a href= "https://wa.me/584148911483?text=Tuve%20problemas%20con%20mi%20formulario,%20vengo%20%20de%20Linea%20Esperanza%20!">
            <button onClick={closeModal}  >Escribir al Whatsapp</button>
          </a>
        </div>
      </div>
    </StyledModal>
  );
};

export default ModalError;
