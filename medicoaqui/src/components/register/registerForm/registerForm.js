import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import DatePickerPage from './datepicker';

class RegisterForm extends React.Component {
    
    render() {
        return (
            <Container>
              <Row>
                <Col md="6">
                  <Card>
                    <CardBody>
                      <form>
                        <p className="h4 text-center py-4">Sign up</p>
                        <div className="grey-text">
                          <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                          <Input label="Your age" icon="user" group type="number" validate error="wrong" success="right"/>
                          <select className="browser-default custom-select" label="Choose your user kind" icon="user" group type="text" validate error="wrong" success="right">
                            <option value="Doctor">Doctor</option>
                            <option value="Patient">Patient</option>
                          </select>
                          <select className="browser-default custom-select" label="Choose your speciality" icon="user" group type="text" validate error="wrong" success="right">
                            <option value="Cardiologista">Cardiologista</option>
                            <option value="Clinico Geral">Clinico Geral</option>
                          </select>
                          
                          <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                          <Input label="Your password" icon="lock" group type="password" validate/>
                          <Input label="Confirm your password" icon="exclamation-triangle" group type="password" validate />
                          
                        </div>
                        <div className="text-center py-4 mt-3">
                          <Button color="cyan" type="submit">Register</Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
        );
    }
}

export default RegisterForm;