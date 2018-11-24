import React from 'react';
import { ListGroupItem } from 'mdbreact'

const MedicalAppointment = ({data}) => (
    data &&
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