import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, toast } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'



import MedicalAppointment from "../medicalAppointment/MedicalAppointment";

class ListMedicalAppointment extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            MedicalAppointments: []
        }

        this.getMedicalAppointments();
        
    };

    getMedicalAppointments() {
        const request = {
            method: 'get',
            headers: {'x-access-token': localStorage.getItem('token')},
            url: 'http://localhost:4000/medicalAppointment'
            
        }
    
        axios(request).then((response) => {
            this.setState({MedicalAppointments: response.data.data})
        }).catch((err) => {
          console.log(err);
          toast.error('Impossível Cadastrar!')
        });
    }
    
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