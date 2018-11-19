import React, { Component } from 'react';

import MedicalAppointment from "../medicalAppointment/MedicalAppointment";

import CreateMedicalAppointment from "../create_medicalAppointment/Create_medicalAppointment";

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
                <div>
                    <MedicalAppointment data={medicalAppointment}> 
                    </MedicalAppointment>
                    <div>
                        <button>REMOVER</button>
                    </div>
                </div>
                
            
          )) 
        return (
            <div>
                {medicalAppointmentList}
                {CreateMedicalAppointment}
            </div>

        );
  } ;
}

export default ListMedicalAppointment;