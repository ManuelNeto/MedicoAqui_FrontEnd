import React from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'mdbreact';
import  { Link } from 'react-router-dom'


import MedicalAppointment from "../medicalAppointment/MedicalAppointment";

class ListMedicalAppointment extends React.Component {
    
    state = {
        MedicalAppointments: [{doctor: 'Manuel', patient: 'Caio', prognostic: "Dor de cabeça", date: "25/02/2018"},
            {doctor: 'Manuel', patient: 'José', prognostic: "Dor de Barriga", date: "05/12/2018"},
            {doctor: 'Manuel', patient: 'Marcos', prognostic: "Dor de cabeça", date: "08/10/2018"},
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
            <Container>
              <Row>
                <Col md="6">
                  <Card>
                    <CardBody>
                        <p className="h4 text-center py-4">Listagem de consultas</p>
                        {medicalAppointmentList}
                        <Button color="second">
                            <Link to='/createMedicalAppointment'> ADD </Link>
                        </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>

        );
  } ;
}

export default ListMedicalAppointment;