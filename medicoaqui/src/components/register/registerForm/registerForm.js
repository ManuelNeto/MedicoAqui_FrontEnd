import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import DatePickerPage from './datepicker';

class RegisterForm extends React.Component {

    state = {
        Specialitys: ['Cardiologista', 'Endocrinologista', 'Clinico Geral']
    };

    
    
    
    render() {

        const {Specialitys} = this.state;

        const specialitysList = Specialitys.map((speciality) =>(
            <option value="{speciality}">{speciality}</option>    
        )) 

        const styleForm = {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px"
        }

        const styleForm2 = {
          width: "500px"
        }

        function setIsDoctor(){
          
        }

        const {isdoctor} = this.state;

        return (
            <Container style={styleForm}>
                  <Card style={styleForm2}>
                    <CardBody>
                      <form>
                        <p className="h2 text-center py-4">Sign up</p>
                        <div className="grey-text">
                          <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                          <Input label="Your age" icon="user" group type="number" validate error="wrong" success="right"/>
                          <select className="browser-default custom-select" label="Choose your user kind" icon="user" group type="text" validate error="wrong" success="right">
                            <option value="Doctor">Doctor</option>
                            <option value="Patient">Patient</option>
                          </select>
                          {isdoctor && (<select className="browser-default custom-select" label="Choose your speciality" icon="user" group type="text" validate error="wrong" success="right">
                            {specialitysList}
                          </select>)}
                          <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                          <Input label="Your password" icon="lock" group type="password" validate/>
                          <Input label="Confirm your password" icon="exclamation-triangle" group type="password" validate />
                          
                        </div>
                        <div className="text-center py-4 mt-3">
                          <Button color="second">
                            Cancel
                          </Button>
                          <Button color="cyan" type="submit">Register</Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
            </Container>
        );
    }
}

export default RegisterForm;