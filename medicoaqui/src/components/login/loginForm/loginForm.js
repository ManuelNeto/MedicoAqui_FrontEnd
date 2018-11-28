import React from 'react';
import { Container, Input, Button, Card, CardBody, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jsonwebtoken'


class LoginForm extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props)
        
        this.state = {
            isLogged: false,
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
        this.login();
        event.preventDefault();
    }

    componentDidMount = () => {
        this._isMounted = true;
    }
    
    componentWillUnmount = () => {
        this._isMounted = false;
    }

    login() {

        const request = {
            method: 'post',
            url: 'http://localhost:4000/login',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }

        axios(request).then((response) => {
            toast.success('Bem-vindo ' + response.data.message);
            var token = response.data.data.token;
            var tokenDecode = jwt.decode(token);
            var userId = tokenDecode.id;
            
            if(this._isMounted) this.setState({isLogged: true, message: response.data.message});
            
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            this.props.history.push('/register');
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
                                        validate error="wrong" success="right" name='email'
                                        value={this.state.email} onChange={this.handleChange}  
                                    />
                                    <Input label="Type your password" icon="lock" group type="password" validate name='password'
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