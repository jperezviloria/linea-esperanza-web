import React, { Component } from "react";
import axios from "axios";
import Paises from "./Paises";
import Envio from "./Button";

import {
  FormularioBase,
  FormularioTabla,
  FormularioAtributos,
  FormularioOpciones,
  Inputs,
  FormularioEnviar,
  EspacioCompartido,
  OpcionesFormulario,
  Popup,
} from "../css/style";

export default class mail extends Component {
  state = {
    users: [],
  };

  getPacientes = async () => {
    const res = await axios.get("http://198.12.249.206:7000/formulario");
    this.setState({ users: res.data });
  };

  async componentDidMount() {
    this.getPacientes();
    console.log(this.state.users);
  }

  onChangeNombre = (e) => {
    this.setState({
      nombre: e.target.value,
    });
  };

  onChangeApellido = (e) => {
    this.setState({
      apellido: e.target.value,
    });
  };

  onChangeSexo = (e) => {
    this.setState({
      sexo: e.target.value,
    });
  };

  onChangeEdad = (e) => {
    this.setState({
      edad: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangeCodigoCelular = (e) => {
    this.setState({
      codigoCelular: e.target.value,
    });
  };

  onChangeTelefonoCelular = (e) => {
    this.setState({
      telefonoCelular: e.target.value,
    });
  };

  onChangeCodigoFijo = (e) => {
    this.setState({
      codigoFijo: e.target.value,
    });
  };

  onChangeTelefonoFijo = (e) => {
    this.setState({
      telefonoFijo: e.target.value,
    });
  };

  onChangePais = (e) => {
    this.setState({
      pais: e.target.value,
    });
  };

  onChangeCiudad = (e) => {
    this.setState({
      ciudad: e.target.value,
    });
  };

  onChangeFormaContacto = (e) => {
    this.setState({
      formaContacto: e.target.value,
    });
  };

  onChangeMotivoConsulta = (e) => {
    this.setState({
      motivoConsulta: e.target.value,
    });
  };

  onChangeDescripcionEmocional = (e) => {
    this.setState({
      descripcionEmocional: e.target.value,
    });
  };

  onChangeHabitosPersonales = (e) => {
    this.setState({
      habitosPersonales: e.target.value,
    });
  };

  onChangeComentarioAdicional = (e) => {
    this.setState({
      comentarioAdicional: e.target.value,
    });
  };

  onSubmitPacientes = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://198.12.249.206:7000/formulario/mail", {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      sexo: this.state.sexo,
      edad: this.state.edad,
      email: this.state.email,
      codigoCelular: this.state.codigoCelular,
      telefonoCelular: this.state.telefonoCelular,
      codigoFijo: this.state.codigoFijo,
      telefonoFijo: this.state.telefonoFijo,
      pais: this.state.pais,
      ciudad: this.state.ciudad,
      formaContacto: this.state.formaContacto,
      motivoConsulta: this.state.motivoConsulta,
      descripcionEmocional: this.state.descripcionEmocional,
      habitosPersonales: this.state.habitosPersonales,
      comentarioAdicional: this.state.comentarioAdicional,
    });
    this.setState({
      nombre: "",
      apellido: "",
      sexo: "",
      edad: "",
      email: "",
      codigoCelular: "",
      telefonoCelular: "",
      codigoFijo: "",
      telefonoFijo: "",
      pais: "",
      ciudad: "",
      formaContacto: "",
      motivoConsulta: "",
      descripcionEmocional: "",
      habitosPersonales: "",
      comentarioAdicional: "",
    });
    this.getPacientes();
  };

  render() {
    return (
      <FormularioBase>
        <h1>Formulario de solicitud de atención psicológica</h1>

        <FormularioTabla onSubmit={this.onSubmitPacientes}>
          <FormularioAtributos className="columna-uno">
            <div>
              <Inputs
                type="text"
                placeholder="Nombre"
                autoComplete="none"
                value={this.state.nombre}
                onChange={this.onChangeNombre}
              />
            </div>
            <div>
              <Inputs
                type="text"
                autoComplete="none"
                placeholder="Apellido"
                value={this.state.apellido}
                onChange={this.onChangeApellido}
              />
            </div>
            <EspacioCompartido className="SexoEdad">
              <div>
                {/* <Inputs type="text" autoComplete="none" placeholder="Sexo" onChange = {this.onChangeSexo}/> */}
                <OpcionesFormulario
                  className="opcionesSexo"
                  value={this.state.sexo}
                >
                  <option value="Sexo" id="AF">
                    Sexo
                  </option>
                  <option value="Femenino" id="AR">
                    Femenino
                  </option>
                  <option value="Masculino" id="BO">
                    Masculino
                  </option>
                </OpcionesFormulario>
              </div>
              <div>
                <Inputs
                  className="inputEdad"
                  type="tel"
                  autoComplete="none"
                  placeholder="Edad"
                  value={this.state.edad}
                  onChange={this.onChangeEdad}
                />
              </div>
            </EspacioCompartido>
            <div>
              <Inputs
                type="email"
                autoComplete="none"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
          </FormularioAtributos>
          <FormularioAtributos className="columna-dos">
            <EspacioCompartido className="AreaConTelefono">
              <div>
                <input
                  className="codigoTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Cod. Area"
                  value={this.state.codigoCelular}
                  onChange={this.onChangeCodigoCelular}
                />
              </div>
              <div>
                <input
                  className="celularTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Teléfono Celular"
                  value={this.state.telefonoCelular}
                  onChange={this.onChangeTelefonoCelular}
                />
              </div>
            </EspacioCompartido>
            <EspacioCompartido className="AreaConTelefono">
              <div>
                <input
                  className="codigoTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Cod. Area"
                  value={this.state.codigoFijo}
                  onChange={this.onChangeCodigoFijo}
                />
              </div>
              <div>
                <input
                  className="celularTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Teléfono Fijo"
                  value={this.state.telefonoFijo}
                  onChange={this.onChangeTelefonoFijo}
                />
              </div>
            </EspacioCompartido>

            <div>
              <Paises value={this.state.pais} />
            </div>
            <div>
              <Inputs
                type="text"
                autoComplete="none"
                placeholder="Ciudad"
                value={this.state.ciudad}
                onChange={this.onChangeCiudad}
              />
            </div>
          </FormularioAtributos>
          <div>
            <h2>¿De qué forma quiere ser contactado?</h2>
            <FormularioOpciones
              value={this.state.formaContacto}
              onChange={this.onChangeFormaContacto}
            >
              <option value="Sin seleccionar">Preferencia</option>
              <option value="Video conferencia">Video conferencia</option>
              <option value="Presencialmente">Presencialmente</option>
              <option value="Llamada telefónica">Llamada telefónica</option>
              <option value="Chat de Whatsapp">Chat de Whatsapp</option>
            </FormularioOpciones>
          </div>
          <div>
            <h2>¿Cúal es el motivo de su consulta?</h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Motivo de consulta"
              value={this.state.motivoConsulta}
              onChange={this.onChangeMotivoConsulta}
            />
          </div>
          <div>
            <h2>¿Describe cómo te sientes emocionalmente en este momento?</h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Cuéntanos"
              value={this.state.descripcionEmocional}
              onChange={this.onChangeDescripcionEmocional}
            />
          </div>
          <div>
            <h2>
              Menciona los campos importantes en los hábitos personales que has
              notado recientemente
            </h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Ejemplo: Alimentación, Concentración, Aseo personal, Vitalidad"
              value={this.state.habitosPersonales}
              onChange={this.onChangeHabitosPersonales}
            />
          </div>
          <div>
            <h2>¿Quieres agregar algún comentario adicional?</h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Cuéntanos"
              value={this.state.comentarioAdicional}
              onChange={this.onChangeComentarioAdicional}
            />
          </div>
          <a>
            <Envio />
            {/* <FormularioEnviar type="submit">ENVIAR FORMULARIO</FormularioEnviar> */}
          </a>
        </FormularioTabla>
      </FormularioBase>
    );
  }
}
