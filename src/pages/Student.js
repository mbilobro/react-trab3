import axios from "axios";
import React, { Component } from "react";

import { Link } from "react-router-dom";

class Student extends Component {

    state = {
        students:[],
        loading:true
    }

    async componentDidMount () {
        const res = await axios.get('http://localhost:8000/api/student');

        if (res.data.status === 200) {
            this.setState({
                students: res.data.students,
                loading: false,
            });
        }
    }

    deleteStudent = async (e, id) => {

        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Deletando..."

        const res = await axios.delete(`http://localhost:8000/api/delete-student/${id}`);
        
        if (res.data.status === 200) {
            thidClickedFunda.closest("tr").remove();
            console.log(res.data.message);
        }

    }

    render (){
        var student_HTML_TABLE = "";

        if (this.state.loading) {
            student_HTML_TABLE = <tr><td colSpan="7"> <h2>Carregando...</h2></td></tr>;

        } else {
            student_HTML_TABLE = this.state.students.map( (item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nameStudent}</td>
                        <td>{item.courseStudent}</td>
                        <td>{item.emailStudent}</td>
                        <td>{item.phoneStudent}</td>
                        <td>
                           <Link to={`edit-student/${item.id}`} className="btn btn-primary btn-sm">Editar</Link> 
                        </td>
                        <td>
                           <button type="button" onClick={(e) => this.deleteStudent(e, item.id)} className="btn btn-danger btn-sm">Deletar</button> 
                        </td>
                    </tr>
                );
            });
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Estudantes
                                    <Link to={'add-student'} className="btn btn-success btn-sm float-end"> Adicionar Estudante</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Curso</th>
                                            <th>E-mail</th>
                                            <th>Celular</th>
                                            <th>Editar</th>
                                            <th>Deletar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {student_HTML_TABLE}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Student;