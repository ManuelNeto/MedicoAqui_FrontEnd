import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Login from "./login/login";
import ListMedicalAppointment from "./medicalAppointment/list_medicalAppointment/ListMedicalAppointment";
import CreateMedicalAppointment from "./medicalAppointment/create_medicalAppointment/Create_medicalAppointment";
import Register from "./register/register";

class App extends Component {
  render() {
    return (
       <div className="AppImage">
        <Route>
          <Switch>
              <Route exact path='/' component={ Login } />
              <Route path='/register' component={ Register } />
              <Route path='/listMedicalAppointment' component={ ListMedicalAppointment } />
              <Route path='/createMedicalAppointment' component={ CreateMedicalAppointment } />
          </Switch>
        </Route>
       </div>
    );
  }
}

export default App;
