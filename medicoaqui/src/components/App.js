import React, { Component } from 'react';

//import Login from "./login/login";
import ListMedicalAppointment from "./medicalAppointment/list_medicalAppointment/ListMedicalAppointment";
//import CreateMedicalAppointment from "./medicalAppointment/create_medicalAppointment/Create_medicalAppointment";
//import Register from "./register/register";
//import LoginForm from "./login/loginForm/loginForm";


class App extends Component {
  render() {
    return (
      <div className="AppImage">
        <ListMedicalAppointment/>
      </div>
    );
  }
}

export default App;
