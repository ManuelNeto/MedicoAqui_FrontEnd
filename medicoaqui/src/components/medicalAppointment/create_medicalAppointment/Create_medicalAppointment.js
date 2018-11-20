import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import DatePickerPage from './datepicker';

class CreateMedicalAppointment extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return(
        <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Agendar consulta</p>
                  <div className="grey-text">
                    <select className="browser-default custom-select" label="Choose your speciality" icon="user" group type="text" validate error="wrong" success="right">
                      <option value="Cardiologista">Cardiologista</option>
                      <option value="Clinico Geral">Clinico Geral</option>
                    </select>
                    <select className="browser-default custom-select" label="Choose your user kind" icon="user" group type="text" validate error="wrong" success="right">
                      <option value="Doctor">Doctor</option>
                      <option value="Patient">Patient</option>
                    </select>

                    <Input label="Your proagnostic" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your description" icon="envelope" group type="textarea" validate error="wrong" success="right"/>
                    
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">Agendar</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default CreateMedicalAppointment;