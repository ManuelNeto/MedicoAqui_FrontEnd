import React from 'react';
import { Container, Input, Button, Card, CardBody, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'
//import DatePickerPage from './datepicker';

class CreateMedicalAppointment extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      Specialitys: ['Cardiologista', 'Endocrinologista', 'Clinico Geral'],
      Doctors: [],
        proagnostic: "",
        description: "",
        speciality: "",
        doctor: ""
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value})

  }
  
  handleSubmit(event) {
      this.createMedicalAppointment();
      event.preventDefault();
  }
  
  createMedicalAppointment() {
    const request = {
        method: 'post',
        headers: {'x-access-token': localStorage.getItem('token')},
        url: 'http://localhost:4000/medicalAppointment',
        data: {
            proagnostic: this.state.proagnostic,
            description: this.state.description,
            patient: "5bf9b1dabfe7652a4c3dbf2b",
            doctor: "5bf9985b035e5c09f4349607",
            speciality: this.state.speciality,
        }
    }


    console.log(request.data);

    axios(request).then((response) => {
      toast.success(response.data.message);
    }).catch((err) => {
      console.log(err);
      toast.error('Impossível Cadastrar!')
    });
  }

  render() {

    
    const {Specialitys} = this.state;
    const {Doctors} = this.state;

    const specialitysList = Specialitys.map((speciality, key) =>(
      <option value={{speciality}} key={key} >{speciality}</option>
    )); 

    const doctorsList = Doctors.map((doctor, key) =>(
      <option value={doctor} key={key}>{doctor.name}</option>    
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
                    <select className="browser-default custom-select" label="Choose your speciality" icon="user">
                            {specialitysList}
                    </select>
                    <select className="browser-default custom-select" label="Choose your speciality" icon="user">
                            {doctorsList}
                    </select>
                    <Input label="Your proagnostic" icon="pencil" group type="email" 
                      validate error="wrong" name='proagnostic' success="right"
                      value={this.state.proagnostic} onChange={this.handleChange} 
                    />
                    <Input label="Your description" icon="pencil" group type="textarea" 
                      validate error="wrong" success="right" name='description'
                      value={this.state.description} onChange={this.handleChange}
                    />
                    
                  </div>
                  
                  <div className="text-center py-4 mt-3">
                    <Button color="second">
                      <Link to='/listMedicalAppointment'> Cancel </Link>
                    </Button>
                    <Button color="cyan" type="submit" onClick={this.handleSubmit}>Agendar</Button>
                  </div>
                </form>
              </CardBody>
            </Card>

            <ToastContainer
                      style={{fontSize: "medium"}}
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar 
                      closeButton={false} 
                      newestOnTop={false}
                      rtl={false}
                      draggable={false}
                      pauseOnHover={false}
                  >
                  </ToastContainer>
      </Container>
    );
  }
};

export default CreateMedicalAppointment;