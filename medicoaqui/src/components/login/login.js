import React, { Component } from 'react';

class Login extends React.Component {
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
                Email: <input name="email" value={this.state.email} type="text"/>
                Password: <input name="email" value={this.state.password} type="text"/>
                <br/> {this.state.email}
                <br/> {this.state.password}
            </div>
        );
    };

};

export default Login;