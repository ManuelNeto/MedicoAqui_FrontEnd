import React, { Component } from 'react';

import ListMedicalAppointment from "./medicalAppointment/list_medicalAppointment/ListMedicalAppointment"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListMedicalAppointment></ListMedicalAppointment>
      </div>
    );
  }
}

export default App;
