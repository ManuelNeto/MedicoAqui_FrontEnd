import React from 'react';
import RegisterForm from './registerForm/registerForm';

class Register extends React.Component {
    constructor(){
        super();
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