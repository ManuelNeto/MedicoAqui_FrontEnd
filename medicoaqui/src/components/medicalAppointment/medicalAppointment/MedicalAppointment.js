import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'

const MedicalAppointment = ({data}) => (
    data &&
        // <div>
        //     <div>Doctor: {data.doctor}</div>
        //     <div>Patient: {data.patient}</div>
        //     <div>Prognostic: {data.prognostic}</div>
        // </div>
        <div>
            <ListGroupItem active href="#">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Doctor: {data.doctor}</h5>
                        <small>{data.date}</small>
                    </div>
                    <p class="mb-1">{data.prognostic}</p>
                    <small>{data.patient}</small>
            </ListGroupItem>
        </div>
       
);

export default MedicalAppointment;