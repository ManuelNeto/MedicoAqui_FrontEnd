import React from 'react';
import { Container, Input, Button, Card, CardBody, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'
//import DatePickerPage from './datepicker';

class CreateMedicalAppointment extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      Doctors: [],
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

  getDoctors() {
    const request = {
        method: 'get',
        headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZmI0ZmFlYmZlNzY1MmE0YzNkYmYyZCIsImVtYWlsIjoia2lsbWFAY2NjLnVmY2cuZWR1LmJyIiwicGFzc3dvcmQiOiI0MGU0NWRlYWZkYzZhYzE0MmU0MzQwMGU4ZjRlMGRiZCIsInVzZXJLaW5kIjoiUGF0aWVudCIsImlhdCI6MTU0MzQ5NDcxMywiZXhwIjoxNTQzNTgxMTEzfQ.kla7cvEXrT6Z3n_3-2aIx3tvMmfAUJA8_OR4wVWmbPE'},
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

    console.log(localStorage.getItem('token'));

    const request = {
        method: 'post',
        headers: {'x-access-token': localStorage.getItem('token')},
        url: 'http://localhost:4000/medicalAppointment',
        data: {
            prognostic: this.state.prognostic,
            description: this.state.description,
            patient: "5bf9b1dabfe7652a4c3dbf2b",
            doctor: "5bf9985b035e5c09f4349607",
            date: this.state.date
        }
    }

    console.log(request.data);

    axios(request).then((response) => {
      toast.success('Medical appointment successfully registered');
    }).catch((err) => {
      console.log(err);
      toast.error('Impossible to register')
    });
  }

  render() {

    const {Doctors} = this.state;

    const specialitysList = Doctors.map((doctor, key) =>(
      <option value={{doctor}} key={key} >{doctor.speciality}</option>
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
                  <p className="h4 text-center py-4">Schedule Medical Appointment</p>
                  <div className="grey-text">
                    <select className="browser-default custom-select" label="Choose your speciality" icon="user">
                            {specialitysList}
                    </select>
                    <select className="browser-default custom-select" label="Choose your speciality" icon="user">
                            {doctorsList}
                    </select>
                    
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
                    <Button color="second">
                      <Link to='/listMedicalAppointment'> Cancel </Link>
                    </Button>
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