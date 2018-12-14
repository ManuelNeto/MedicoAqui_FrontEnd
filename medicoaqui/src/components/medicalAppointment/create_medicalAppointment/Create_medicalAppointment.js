import React from 'react';
import { Container, Input, Button, Card, CardBody, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'
import SelectSpecialty from './Select_Specialty';
import SelectDoctor from './Select_Doctor';
//import DatePickerPage from '. /datepicker';

class CreateMedicalAppointment extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      Doctors: [],
      DoctorsBySpecialty: [],
        prognostic: "",
        description: "",
        speciality: "",
        doctor: "",
        date: ""
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

  componentWillMount = () => {
    this.getDoctors();
  }

  getDoctorsBySpecialty() {
    const request = {
        method: 'post',
        headers: {'x-access-token': localStorage.getItem('token')},
        url: 'http://localhost:4000/user/doctorsBySpecialty',
        data: {
          speciality: this.state.speciality
        }
    }

    axios(request).then((response) => {
      this.setState({DoctorsBySpecialty: response.data.data});
    }).catch((err) => {
      console.log(err);
      toast.error('Erro ao listar médicos!')
    });
  }

  getDoctors() {
    const request = {
        method: 'get',
        headers: {'x-access-token': localStorage.getItem('token')},
        url: 'http://localhost:4000/user/doctors'
    }

    
    axios(request).then((response) => {
      this.setState({Doctors: response.data.data});
    }).catch((err) => {
      console.log(err);
      toast.error('Erro ao listar médicos!')
    });
  }
  
  createMedicalAppointment() {

    const request = {
        method: 'post',
        headers: {'x-access-token': localStorage.getItem('token')},
        url: 'http://localhost:4000/medicalAppointment',
        data: {
            prognostic: this.state.prognostic,
            description: this.state.description,
            patient: "João",
            doctor: "Kilma",
            speciality: this.state.speciality,
            date: this.state.date
        }
    }

    axios(request).then((response) => {
      console.log(request.data);
      toast.success('Medical appointment successfully registered');
    }).catch((err) => {
      console.log(err);
      toast.error('Impossible to register')
    });
  }

  handleSpecialitysChange = e =>{
    this.setState({speciality: e.target.value});
    this.getDoctorsBySpecialty();
  }

  handleDoctorChange = e =>{
    this.setState({doctor: e.target.value});
  }

  render() {

    const {Doctors} = this.state;
    const {DoctorsBySpecialty} = this.state;

    const specialitysList = Doctors.map((doctor, key) =>(
      <option value={doctor.speciality} key={key} >{doctor.speciality}</option>
    )); 

    const doctorsList = DoctorsBySpecialty.map((doctor, key) =>(
      <option value={doctor.name} key={key}>{doctor.name}</option>    
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
                  <p className="h4 text-center py-4">Schedule Medical Appointment</p>
                  <div className="grey-text">
                    <SelectSpecialty onChange={this.handleSpecialitysChange} data={specialitysList}>
                    </SelectSpecialty>
                    <SelectDoctor onChange={this.handleDoctorChange} data={doctorsList}>
                    </SelectDoctor>
                    <Input label="Your prognostic" icon="pencil" group type="email" 
                      validate error="wrong" name='prognostic' success="right"
                      value={this.state.prognostic} onChange={this.handleChange} 
                    />
                    <Input label="Your description" icon="pencil" group type="textarea" 
                      validate error="wrong" success="right" name='description'
                      value={this.state.description} onChange={this.handleChange}
                    />

                    <Input label="Date Ex: dd/mm/yyyy" icon="pencil" group type="text" 
                      validate error="wrong" name='date' success="right"
                      value={this.state.date} onChange={this.handleChange} 
                    />
                    
                  </div>
                  
                  <div className="text-center py-4 mt-3">
                    <Link to='/listMedicalAppointment' color="second"> 
                      <Button >
                          Cancel  
                      </Button>                                       
                    </Link>
                    <Button color="cyan" type="submit" onClick={this.handleSubmit}>Schedule</Button>
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