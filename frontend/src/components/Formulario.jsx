import React, { Component } from "react";
import axios from "axios-https-proxy-fix";
//import Paises from "./Paises";

//------Estos son los componentes que hay que modicicar a la hora de que el proceso sea exitoso o esté en proceso se asistencia técnica------
import Envio from "./Button";
//import EnvioError from "./ButtonError"; 

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
    const res = await axios.get("http://IP:7000/formulario");
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

    const res = await axios.post("http://IP:7000/formulario/mail", {
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
              <OpcionesFormulario 
            className="opcionesPais"
            value={this.state.pais}
            onChange={this.onChangePais}>
            
                <option value="Elegir" id="AF">
                  País
                </option>
                <option value="Argentina" id="AR">
                  Argentina
                </option>
                <option value="Bolivia" id="BO">
                  Bolivia
                </option>
                <option value="Brasil" id="BR">
                  Brasil
                </option>
                <option value="Chile" id="CL">
                  Chile
                </option>
                <option value="Colombia" id="CO">
                  Colombia
                </option>
                <option value="Ecuador" id="EC">
                  Ecuador
                </option>
                <option value="España" id="ES">
                  España
                </option>
                <option value="Paraguay" id="PY">
                  Paraguay
                </option>
                <option value="Perú" id="PE">
                  Perú
                </option>
                <option value="Uruguay" id="UY">
                  Uruguay
                </option>
                <option value="Venezuela" id="VE">
                  Venezuela
                </option>

                <option value="-------" id="-----">
                  ------------------
                </option>
                <option value="Afganistán" id="AF">
                  Afganistán
                </option>
                <option value="Albania" id="AL">
                  Albania
                </option>
                <option value="Alemania" id="DE">
                  Alemania
                </option>
                <option value="Andorra" id="AD">
                  Andorra
                </option>
                <option value="Angola" id="AO">
                  Angola
                </option>
                <option value="Anguila" id="AI">
                  Anguila
                </option>
                <option value="Antártida" id="AQ">
                  Antártida
                </option>
                <option value="Antigua y Barbuda" id="AG">
                  Antigua y Barbuda
                </option>
                <option value="Antillas holandesas" id="AN">
                  Antillas holandesas
                </option>
                <option value="Arabia Saudí" id="SA">
                  Arabia Saudí
                </option>
                <option value="Argelia" id="DZ">
                  Argelia
                </option>

                <option value="Armenia" id="AM">
                  Armenia
                </option>
                <option value="Aruba" id="AW">
                  Aruba
                </option>
                <option value="Australia" id="AU">
                  Australia
                </option>
                <option value="Austria" id="AT">
                  Austria
                </option>
                <option value="Azerbaiyán" id="AZ">
                  Azerbaiyán
                </option>
                <option value="Bahamas" id="BS">
                  Bahamas
                </option>
                <option value="Bahrein" id="BH">
                  Bahrein
                </option>
                <option value="Bangladesh" id="BD">
                  Bangladesh
                </option>
                <option value="Barbados" id="BB">
                  Barbados
                </option>
                <option value="Bélgica" id="BE">
                  Bélgica
                </option>
                <option value="Belice" id="BZ">
                  Belice
                </option>
                <option value="Benín" id="BJ">
                  Benín
                </option>
                <option value="Bermudas" id="BM">
                  Bermudas
                </option>
                <option value="Bhután" id="BT">
                  Bhután
                </option>
                <option value="Bielorrusia" id="BY">
                  Bielorrusia
                </option>
                <option value="Birmania" id="MM">
                  Birmania
                </option>

                <option value="Bosnia y Herzegovina" id="BA">
                  Bosnia y Herzegovina
                </option>
                <option value="Botsuana" id="BW">
                  Botsuana
                </option>

                <option value="Brunei" id="BN">
                  Brunei
                </option>
                <option value="Bulgaria" id="BG">
                  Bulgaria
                </option>
                <option value="Burkina Faso" id="BF">
                  Burkina Faso
                </option>
                <option value="Burundi" id="BI">
                  Burundi
                </option>
                <option value="Cabo Verde" id="CV">
                  Cabo Verde
                </option>
                <option value="Camboya" id="KH">
                  Camboya
                </option>
                <option value="Camerún" id="CM">
                  Camerún
                </option>
                <option value="Canadá" id="CA">
                  Canadá
                </option>
                <option value="Chad" id="TD">
                  Chad
                </option>

                <option value="China" id="CN">
                  China
                </option>
                <option value="Chipre" id="CY">
                  Chipre
                </option>

                <option value="Comores" id="KM">
                  Comores
                </option>
                <option value="Congo" id="CG">
                  Congo
                </option>
                <option value="Corea" id="KR">
                  Corea
                </option>
                <option value="Corea del Norte" id="KP">
                  Corea del Norte
                </option>
                <option value="Costa del Marfíl" id="CI">
                  Costa del Marfíl
                </option>
                <option value="Costa Rica" id="CR">
                  Costa Rica
                </option>
                <option value="Croacia" id="HR">
                  Croacia
                </option>
                <option value="Cuba" id="CU">
                  Cuba
                </option>
                <option value="Dinamarca" id="DK">
                  Dinamarca
                </option>
                <option value="Djibouri" id="DJ">
                  Djibouri
                </option>
                <option value="Dominica" id="DM">
                  Dominica
                </option>

                <option value="Egipto" id="EG">
                  Egipto
                </option>
                <option value="El Salvador" id="SV">
                  El Salvador
                </option>
                <option value="Emiratos Arabes Unidos" id="AE">
                  Emiratos Arabes Unidos
                </option>
                <option value="Eritrea" id="ER">
                  Eritrea
                </option>
                <option value="Eslovaquia" id="SK">
                  Eslovaquia
                </option>
                <option value="Eslovenia" id="SI">
                  Eslovenia
                </option>

                <option value="Estados Unidos" id="US">
                  Estados Unidos
                </option>
                <option value="Estonia" id="EE">
                  Estonia
                </option>
                <option value="c" id="ET">
                  Etiopía
                </option>

                <option value="Filipinas" id="PH">
                  Filipinas
                </option>
                <option value="Finlandia" id="FI">
                  Finlandia
                </option>
                <option value="Francia" id="FR">
                  Francia
                </option>
                <option value="Gabón" id="GA">
                  Gabón
                </option>
                <option value="Gambia" id="GM">
                  Gambia
                </option>
                <option value="Georgia" id="GE">
                  Georgia
                </option>

                <option value="Ghana" id="GH">
                  Ghana
                </option>
                <option value="Gibraltar" id="GI">
                  Gibraltar
                </option>
                <option value="Granada" id="GD">
                  Granada
                </option>
                <option value="Grecia" id="GR">
                  Grecia
                </option>
                <option value="Groenlandia" id="GL">
                  Groenlandia
                </option>
                <option value="Guadalupe" id="GP">
                  Guadalupe
                </option>
                <option value="Guam" id="GU">
                  Guam
                </option>
                <option value="Guatemala" id="GT">
                  Guatemala
                </option>

                <option value="Guinea" id="GN">
                  Guinea
                </option>

                <option value="Guinea-Bissau" id="GW">
                  Guinea-Bissau
                </option>
                <option value="Haití" id="HT">
                  Haití
                </option>
                <option value="Holanda" id="NL">
                  Holanda
                </option>
                <option value="Honduras" id="HN">
                  Honduras
                </option>
                <option value="Hong Kong R. A. E" id="HK">
                  Hong Kong R. A. E
                </option>
                <option value="Hungría" id="HU">
                  Hungría
                </option>
                <option value="India" id="IN">
                  India
                </option>
                <option value="Indonesia" id="ID">
                  Indonesia
                </option>
                <option value="Irak" id="IQ">
                  Irak
                </option>
                <option value="Irán" id="IR">
                  Irán
                </option>
                <option value="Irlanda" id="IE">
                  Irlanda
                </option>
                <option value="Isla Bouvet" id="BV">
                  Isla Bouvet
                </option>
                <option value="Isla Christmas" id="CX">
                  Isla Christmas
                </option>

                <option value="Islandia" id="IS">
                  Islandia
                </option>
                <option value="Islas Caimán" id="KY">
                  Islas Caimán
                </option>
                <option value="Islas Cook" id="CK">
                  Islas Cook
                </option>

                <option value="Islas Faroe" id="FO">
                  Islas Faroe
                </option>
                <option value="Islas Fiyi" id="FJ">
                  Islas Fiyi
                </option>

                <option value="Islas Marshall" id="MH">
                  Islas Marshall
                </option>

                <option value="Islas Palau" id="PW">
                  Islas Palau
                </option>
                <option value="Islas Salomón" d="SB">
                  Islas Salomón
                </option>
                <option value="Islas Tokelau" id="TK">
                  Islas Tokelau
                </option>

                <option value="Israel" id="IL">
                  Israel
                </option>
                <option value="Italia" id="IT">
                  Italia
                </option>
                <option value="Jamaica" id="JM">
                  Jamaica
                </option>
                <option value="Japón" id="JP">
                  Japón
                </option>
                <option value="Jordania" id="JO">
                  Jordania
                </option>
                <option value="Kazajistán" id="KZ">
                  Kazajistán
                </option>
                <option value="Kenia" id="KE">
                  Kenia
                </option>
                <option value="Kirguizistán" id="KG">
                  Kirguizistán
                </option>
                <option value="Kiribati" id="KI">
                  Kiribati
                </option>
                <option value="Kuwait" id="KW">
                  Kuwait
                </option>
                <option value="Laos" id="LA">
                  Laos
                </option>
                <option value="Lesoto" id="LS">
                  Lesoto
                </option>
                <option value="Letonia" id="LV">
                  Letonia
                </option>
                <option value="Líbano" id="LB">
                  Líbano
                </option>
                <option value="Liberia" id="LR">
                  Liberia
                </option>
                <option value="Libia" id="LY">
                  Libia
                </option>
                <option value="Liechtenstein" id="LI">
                  Liechtenstein
                </option>
                <option value="Lituania" id="LT">
                  Lituania
                </option>
                <option value="Luxemburgo" id="LU">
                  Luxemburgo
                </option>
                <option value="Macao R. A. E" id="MO">
                  Macao R. A. E
                </option>
                <option value="Madagascar" id="MG">
                  Madagascar
                </option>
                <option value="Malasia" id="MY">
                  Malasia
                </option>
                <option value="Malawi" id="MW">
                  Malawi
                </option>
                <option value="Maldivas" id="MV">
                  Maldivas
                </option>
                <option value="Malí" id="ML">
                  Malí
                </option>
                <option value="Malta" id="MT">
                  Malta
                </option>
                <option value="Marruecos" id="MA">
                  Marruecos
                </option>
                <option value="Martinica" id="MQ">
                  Martinica
                </option>
                <option value="Mauricio" id="MU">
                  Mauricio
                </option>
                <option value="Mauritania" id="MR">
                  Mauritania
                </option>
                <option value="Mayotte" id="YT">
                  Mayotte
                </option>
                <option value="México" id="MX">
                  México
                </option>
                <option value="Micronesia" id="FM">
                  Micronesia
                </option>
                <option value="Moldavia" id="MD">
                  Moldavia
                </option>
                <option value="Mónaco" id="MC">
                  Mónaco
                </option>
                <option value="Mongolia" id="MN">
                  Mongolia
                </option>
                <option value="Montserrat" id="MS">
                  Montserrat
                </option>
                <option value="Mozambique" id="MZ">
                  Mozambique
                </option>
                <option value="Namibia" id="NA">
                  Namibia
                </option>
                <option value="Nauru" id="NR">
                  Nauru
                </option>
                <option value="Nepal" id="NP">
                  Nepal
                </option>
                <option value="Nicaragua" id="NI">
                  Nicaragua
                </option>
                <option value="Níger" id="NE">
                  Níger
                </option>
                <option value="Nigeria" id="NG">
                  Nigeria
                </option>
                <option value="Niue" id="NU">
                  Niue
                </option>
                <option value="Norfolk" id="NF">
                  Norfolk
                </option>
                <option value="Noruega" id="NO">
                  Noruega
                </option>
                <option value="Nueva Caledonia" id="NC">
                  Nueva Caledonia
                </option>
                <option value="Nueva Zelanda" id="NZ">
                  Nueva Zelanda
                </option>
                <option value="Omán" id="OM">
                  Omán
                </option>
                <option value="Panamá" id="PA">
                  Panamá
                </option>
                <option value="Papua Nueva Guinea" id="PG">
                  Papua Nueva Guinea
                </option>
                <option value="Paquistán" id="PK">
                  Paquistán
                </option>

                <option value="Pitcairn" id="PN">
                  Pitcairn
                </option>

                <option value="Polonia" id="PL">
                  Polonia
                </option>
                <option value="Portugal" id="PT">
                  Portugal
                </option>
                <option value="Puerto Rico" id="PR">
                  Puerto Rico
                </option>
                <option value="Qatar" id="QA">
                  Qatar
                </option>
                <option value="Reino Unido" id="UK">
                  Reino Unido
                </option>

                <option value="República Checa" id="CZ">
                  República Checa
                </option>
                <option value="República de Sudáfrica" id="ZA">
                  República de Sudáfrica
                </option>

                <option value="República Dominicana" id="DO">
                  República Dominicana
                </option>
                <option value="Reunión" id="RE">
                  Reunión
                </option>
                <option value="Ruanda" id="RW">
                  Ruanda
                </option>
                <option value="Rumania" id="RO">
                  Rumania
                </option>
                <option value="Rusia" id="RU">
                  Rusia
                </option>
                <option value="Samoa" id="WS">
                  Samoa
                </option>
                <option value="Samoa occidental" id="AS">
                  Samoa occidental
                </option>
                <option value="San Kitts y Nevis" id="KN">
                  San Kitts y Nevis
                </option>
                <option value="San Marino" id="SM">
                  San Marino
                </option>
                <option value="San Pierre y Miquelon" id="PM">
                  San Pierre y Miquelon
                </option>

                <option value="Santa Helena" id="SH">
                  Santa Helena
                </option>
                <option value="Santa Lucía" id="LC">
                  Santa Lucía
                </option>
                <option value="Santo Tomé y Príncipe" id="ST">
                  Santo Tomé y Príncipe
                </option>
                <option value="Senegal" id="SN">
                  Senegal
                </option>
                <option value="Serbia y Montenegro" id="YU">
                  Serbia y Montenegro
                </option>
                <option value="Sychelles" id="SC">
                  Seychelles
                </option>
                <option value="Sierra Leona" id="SL">
                  Sierra Leona
                </option>
                <option value="Singapur" id="SG">
                  Singapur
                </option>
                <option value="Siria" id="SY">
                  Siria
                </option>
                <option value="Somalia" id="SO">
                  Somalia
                </option>
                <option value="Sri Lanka" id="LK">
                  Sri Lanka
                </option>
                <option value="Suazilandia" id="SZ">
                  Suazilandia
                </option>
                <option value="Sudán" id="SD">
                  Sudán
                </option>
                <option value="Suecia" id="SE">
                  Suecia
                </option>
                <option value="Suiza" id="CH">
                  Suiza
                </option>
                <option value="Surinam" id="SR">
                  Surinam
                </option>
                <option value="Svalbard" id="SJ">
                  Svalbard
                </option>
                <option value="Tailandia" id="TH">
                  Tailandia
                </option>
                <option value="Taiwán" id="TW">
                  Taiwán
                </option>
                <option value="Tanzania" id="TZ">
                  Tanzania
                </option>
                <option value="Tayikistán" id="TJ">
                  Tayikistán
                </option>

                <option value="Timor Oriental" id="TP">
                  Timor Oriental
                </option>
                <option value="Togo" id="TG">
                  Togo
                </option>
                <option value="Tonga" id="TO">
                  Tonga
                </option>
                <option value="Trinidad y Tobago" id="TT">
                  Trinidad y Tobago
                </option>
                <option value="Túnez" id="TN">
                  Túnez
                </option>
                <option value="Turkmenistán" id="TM">
                  Turkmenistán
                </option>
                <option value="Turquía" id="TR">
                  Turquía
                </option>
                <option value="Tuvalu" id="TV">
                  Tuvalu
                </option>
                <option value="Ucrania" id="UA">
                  Ucrania
                </option>
                <option value="Uganda" id="UG">
                  Uganda
                </option>

                <option value="Uzbekistán" id="UZ">
                  Uzbekistán
                </option>
                <option value="Vanuatu" id="VU">
                  Vanuatu
                </option>

                <option value="Vietnam" id="VN">
                  Vietnam
                </option>
                <option value="Wallis y Futuna" id="WF">
                  Wallis y Futuna
                </option>
                <option value="Yemen" id="YE">
                  Yemen
                </option>
                <option value="Zambia" id="ZM">
                  Zambia
                </option>
                <option value="Zimbabue" id="ZW">
                  Zimbabue
                </option>
              </OpcionesFormulario>
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
            {/* --------------ESTE ES EL VALOR QUE HAY QUE CAMBIAR PARA QUE SEA EXITOSO EL PROCESO (Envio y EnvioError-----------) */}
            <Envio />
            {/* <FormularioEnviar type="submit">ENVIAR FORMULARIO</FormularioEnviar> */}
          </a>
        </FormularioTabla>
      </FormularioBase>
    );
  }
}
