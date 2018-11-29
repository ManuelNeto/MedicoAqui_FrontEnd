import React from 'react';
import { Container,  Input, Button, Card, CardBody, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'
//import DatePickerPage from './datepicker';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            Specialitys: ['Cardio', 'Clínico Geral', 'Pediatra'],
            name: '',
            age: '',
            speciality: '',
            userKind: '',
            email: '',
            password: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({...this.state, [event.target.name]: event.target.value})

    }
    
    handleSubmit(event) {
        this.register();
        event.preventDefault();
    }
    
    register() {
        const request = {
          method: 'post',
          url: 'http://localhost:4000/user',
          data: {
              name: this.state.name,
              age: this.state.age,
              userKind: this.state.userKind,
              speciality: this.state.speciality,
              email: this.state.email,
              password: this.state.password
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

        const specialitysList = Specialitys.map((speciality, key) =>(
            <option value={speciality} key={key}>{speciality}</option>    
        )) 

        const styleForm = {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
            //marginTop: "70px"
        }

        const styleForm2 = {
          width: "500px"
        }

        return (
            <Container style={styleForm}>
                  <Card style={styleForm2}>
                    <CardBody>
                      <form>
                        <p className="h2 text-center py-4"> Register </p>
                        <div className="grey-text">
                          <Input 
                            label="Your name" icon="user" group type="text" 
                            validate error="wrong" success="right" name='name'
                            value={this.state.name} onChange={this.handleChange}
                          />
                          <Input 
                            label="Your age" icon="user" group type="number" 
                            validate error="wrong" success="right" name='age'
                            value={this.state.age} onChange={this.handleChange}  
                          />
                          <select className="browser-default custom-select" label="Choose your user kind" 
                            icon="user" name="userKind">
                              <option value="Doctor">Doctor</option>
                              <option value="Patient">Patient</option>
                          </select>

                          <select className="browser-default custom-select" label="Choose your speciality" icon="user">
                                  {specialitysList}
                          </select>
                          
                          <Input 
                            label="Your email" icon="envelope" group type="email" 
                            validate error="wrong" success="right" name='email'
                            value={this.state.email} onChange={this.handleChange}  

                          />
                          <Input label="Your password" icon="lock" group type="password" name='password' validate
                            value={this.state.password} onChange={this.handleChange}  
                          />
                          <Input label="Confirm your password" icon="exclamation-triangle" group type="password" name='passwordConfirm' validate 
                          
                          />
                          
                        </div>
                        <div className="text-center py-4 mt-3">
                            <Link to='/' color="second"> 
                              <Button >
                                Cancel  
                              </Button>                                       
                            </Link>
                          <Button color="cyan" type="submit" onClick={this.handleSubmit}>Register</Button>
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
}

export default RegisterForm;