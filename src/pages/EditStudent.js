import axios from "axios";
import React, { Component } from "react";

import { Link } from "react-router-dom";

class EditStudent extends Component {

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

    async componentDidMount () {
        const stud_id = this.props.match.params.id;

        const res = await axios.get(`http://localhost:8000/api/edit-student/${stud_id}`);

        if (res.data.status === 200) {
            this.setState({
                nameStudent: res.data.student.nameStudent,
                courseStudent: res.data.student.courseStudent,
                emailStudent: res.data.student.emailStudent,
                phoneStudent: res.data.student.phoneStudent,
            })
        }
    }

    updateStudent = async (e) => {
        e.preventDefault();

        document.getElementById('updateBtn').disabled = true;

        document.getElementById('updateBtn').innerText = "Editando...";
        const stud_id = this.props.match.params.id;

        const res = await axios.put(`http://localhost:8000/api/update-student/${stud_id}`, this.state);

        if (res.data.status === 200) {
            document.getElementById('updateBtn').disabled = false;
            document.getElementById('updateBtn').innerText = "Editar Estudante"
        }
        
    }

    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Editar Estudante
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> Retornar</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateStudent}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="nameStudent">Nome do estudante</label>
                                        <input type="text" name="nameStudent" onChange={this.handleInput} value={this.state.nameStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="courseStudent">Curso do estudante</label>
                                        <input type="text" name="courseStudent" onChange={this.handleInput} value={this.state.courseStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="emailStudent">E-mail do estudante</label>
                                        <input type="email" name="emailStudent" onChange={this.handleInput} value={this.state.emailStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="phoneStudent">Celular do estudante</label>
                                        <input type="text" name="phoneStudent" onChange={this.handleInput} value={this.state.phoneStudent} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-success" id="updateBtn">Editar Estudante</button>
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

export default EditStudent;