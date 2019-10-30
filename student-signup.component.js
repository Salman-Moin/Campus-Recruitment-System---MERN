import React, {Component} from 'react';
import axios from 'axios';

export default class Studentsignup extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
        this.onChangeStudentEducation = this.onChangeStudentEducation.bind(this);
        this.onChangeStudentPercentage = this.onChangeStudentPercentage.bind(this);
        this.onChangeStudentPass = this.onChangeStudentPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_name: '',
            student_email: '',
            student_phone: '',
            student_education: '',
            student_percentage: '',
            student_pass: '',
            student_block: false
        }
    }

    onChangeStudentName(e) {
        this.setState({
            student_name: e.target.value
        });
    }

    onChangeStudentEmail(e) {
        this.setState({
            student_email: e.target.value
        });
    }

    onChangeStudentPhone(e) {
        this.setState({
            student_phone: e.target.value
        });
    }

    onChangeStudentEducation(e) {
        this.setState({
            student_education: e.target.value
        });
    }

    onChangeStudentPercentage(e) {
        this.setState({
            student_percentage: e.target.value
        });
    }

    onChangeStudentPass(e) {
        this.setState({
            student_pass: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Student Name: ${this.state.student_name}`);
        console.log(`Student Email: ${this.state.student_email}`);
        console.log(`Student Phone: ${this.state.student_phone}`);
        console.log(`Student Education: ${this.state.student_education}`);
        console.log(`Student Percentage: ${this.state.student_percentage}`);
        console.log(`Student Password: ${this.state.student_pass}`);

        const newTodo = {
            student_name: this.state.student_name,
            student_email: this.state.student_email,
            student_phone: this.state.student_phone,
            student_education: this.state.student_education,
            student_percentage: this.state.student_percentage,
            student_pass: this.state.student_pass,

        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            student_name: '',
            student_email: '',
            student_phone: '',
            student_education: '',
            student_percentage: '',
            student_pass: '',
            student_block: false
         
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Student Signup</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_name}
                                onChange={this.onChangeStudentName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_email}
                                onChange={this.onChangeStudentEmail}
                                />
                    </div>

                    <div className="form-group">
                        <label>Phone: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_phone}
                                onChange={this.onChangeStudentPhone}
                                />
                    </div>

                    <div className="form-group">
                        <label>Education: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_education}
                                onChange={this.onChangeStudentEducation}
                                />
                    </div>

                    <div className="form-group">
                        <label>Percentage: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_percentage}
                                onChange={this.onChangeStudentPercentage}
                                />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.student_pass}
                                onChange={this.onChangeStudentPass}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Student Signup" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}