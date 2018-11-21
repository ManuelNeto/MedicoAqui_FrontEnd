import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
//import DatePickerPage from './datepicker';

class CreateMedicalAppointment extends React.Component  {
  constructor(props) {
    super(props);
    
  }

  state = {
    Specialitys: ['Cardiologista', 'Endocrinologista', 'Clinico Geral'],
    Doctors: [{name: 'Marcos'}, {name: 'Manuel'}, {name: 'Lucas'}]
  }

  render() {

    const {Specialitys} = this.state;
    const {Doctors} = this.state;

    const specialitysList = Specialitys.map((speciality) =>(
      <option value="{speciality}">{speciality}</option>    
    )); 

    const doctorsList = Doctors.map((doctor) =>(
      <option value="{doctor}">{doctor.name}</option>    
    )); 

    const styleForm = {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px"
    }

    const styleForm2 = {
      width: "500px"
    }

    return(
      <Container style={styleForm}>
        <Card style={styleForm2}>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Agendar consulta</p>
                  <div className="grey-text">
                    <select className="browser-default custom-select" label="Choose your speciality" icon="user" group type="text" validate error="wrong" success="right">
                            {specialitysList}
                    </select>
                    <select className="browser-default custom-select" label="Choose your speciality" icon="user" group type="text" validate error="wrong" success="right">
                            {doctorsList}
                    </select>
                    <Input label="Your proagnostic" icon="pencil" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your description" icon="pencil" group type="textarea" validate error="wrong" success="right"/>
                    
                  </div>
                  
                  <div className="text-center py-4 mt-3">
                    <Button color="second">
                      Cancel
                    </Button>
                    <Button color="cyan" type="submit">Agendar</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
      </Container>
    );
  }
};

export default CreateMedicalAppointment;