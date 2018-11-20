import React, { Component } from 'react';
import RegisterForm from './registerForm/registerForm';

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        };
    };

    render() {
        return (
            <div>
                <RegisterForm/>
            </div>
        );
    };

};

export default Register;