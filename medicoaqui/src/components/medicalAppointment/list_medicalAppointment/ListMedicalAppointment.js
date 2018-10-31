import React, { Component } from 'react';

import MedicalAppointment from "../medicalAppointment/MedicalAppointment"

class ListMedicalAppointment extends React.Component {
    
    state = {
        MedicalAppointments: [{doctor: 'Manuel', patient: 'Caio', prognostic: "Dor de cabeça"},
            {doctor: 'Manuel', patient: 'José', prognostic: "Dor de Barriga"},
            {doctor: 'Manuel', patient: 'Marcos', prognostic: "Dor de cabeça"},
        ]
    };
    
    render() {
        const {MedicalAppointments} = this.state;

        const medicalAppointmentList = MedicalAppointments.map((medicalAppointment) =>(
            
                <MedicalAppointment data={medicalAppointment}> 
                </MedicalAppointment>
            
          )) 
        return (
            <div>
                {medicalAppointmentList}
            </div>

        );
  } ;
}

export default ListMedicalAppointment;