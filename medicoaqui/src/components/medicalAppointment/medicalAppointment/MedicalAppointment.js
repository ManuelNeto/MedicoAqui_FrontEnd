import React from 'react';

const MedicalAppointment = ({data}) => (
    data &&
        <div>
            <div>Doctor: {data.doctor}</div>
            <div>Patient: {data.patient}</div>
            <div>Prognostic: {data.prognostic}</div>
        </div>
);

export default MedicalAppointment;