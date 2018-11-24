import React from 'react';
import { Container, Input, Button, Card, CardBody, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value})

    }
    
    handleSubmit(event) {
        this.login();
        event.preventDefault();
    }

    login() {

        const request = {
            method: 'post',
            url: 'http://localhost:4000/login',
            data: {
                email: 'manuel@email.com',
                password: '123456'
            }
        }

        axios(request).then((response) => {
            toast.success('Bem-vindo ' + response.data.message);
          }).catch((err) => {
            console.log(err);
            toast.error('Impossível Cadastrar!')
          });

    }
    
    render() {

        const styleForm = {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px"
        }

        const styleForm2 = {
          width: "500px"
        }

        return (
            <Container style={styleForm}>
                        <Card style={styleForm2}>
                            <CardBody>
                                <form>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <Input label="Type your email" icon="envelope" group type="email" 
                                        validate error="wrong" success="right"
                                        value={this.state.email} onChange={this.handleChange}  
                                    />
                                    <Input label="Type your password" icon="lock" group type="password" validate
                                        value={this.state.password} onChange={this.handleChange}  
                                    />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="second">
                                        <Link to='/register'> Register </Link>
                                    </Button>
                                    <Button color="cyan" type="submit" onClick={this.handleSubmit}>Login</Button>
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

export default LoginForm;