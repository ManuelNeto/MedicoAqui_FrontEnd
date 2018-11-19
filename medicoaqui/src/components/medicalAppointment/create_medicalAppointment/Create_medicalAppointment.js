import React, { Component } from 'react';

class CreateMedicalAppointment extends React.Component {
    constructor(){
        super();
        this.state = {
            nome: ""
        };
        this.onChange = (evento) => {
            this.setState({nome: evento.target.value});
        };
    };

    render() {
        return (
            <div>
                Nome: <input name="nome" value={this.state.nome} onChange={this.onChange} type="text"/>
                <br/> {this.state.nome}
            </div>
        );
    };

};

export default CreateMedicalAppointment;