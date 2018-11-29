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

    removeMedicalAppointment(id) {
        console.log('oi');
        const request = {
            method: 'delete',
            headers: {'x-access-token': localStorage.getItem('token')},
            url: 'http://localhost:4000/medicalAppointment/' + id
            
        }
    
        axios(request).then((response) => {
            toast.success('Medical Appointment successfully removed!')
        }).catch((err) => {
          console.log(err);
          toast.error('Impossible to remove')
        });
    }
    
    render() {
        const {MedicalAppointments} = this.state;

        const medicalAppointmentList = MedicalAppointments.map((medicalAppointment, key) =>(
            <div>
                <MedicalAppointment data={medicalAppointment} key={key}> 
                </MedicalAppointment>
                <div className="text-center py-4 mt-3">
                    <Button color="cyan" onClick={this.removeMedicalAppointment(medicalAppointment._id)}>REMOVE</Button>
                </div>
            </div>    
            
        )) 
        
        return (
            <Container>
              <Row>
                <Col md="6">
                  <Card>
                    <CardBody>
                        <p className="h4 text-center py-4">List of Medical Appointments</p>
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