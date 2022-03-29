import axios from "axios";
import React, { Component } from "react";

import { Link } from "react-router-dom";

class AddStudent extends Component {

    state = {
        nameStudent: '',
        courseStudent: '',
        emailStudent: '',
        phoneStudent: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });


    }

    saveStudent = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-student', this.state);

        if (res.data.status === 200) {
            this.setState({
                nameStudent: '',
                courseStudent: '',
                emailStudent: '',
                phoneStudent: '',
            })
        }
        
    }

    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Adicionar Estudante
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> Retornar</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveStudent}>
                                    <div className="form-group mb-3">
                                        <label for="nameStudent">Nome do estudante</label>
                                        <input type="text" name="nameStudent" onChange={this.handleInput} value={this.state.nameStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="courseStudent">Curso do estudante</label>
                                        <input type="text" name="courseStudent" onChange={this.handleInput} value={this.state.courseStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="emailStudent">E-mail do estudante</label>
                                        <input type="email" name="emailStudent" onChange={this.handleInput} value={this.state.emailStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="phoneStudent">Celular do estudante</label>
                                        <input type="text" name="phoneStudent" onChange={this.handleInput} value={this.state.phoneStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-success">Salvar Estudante</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default AddStudent;