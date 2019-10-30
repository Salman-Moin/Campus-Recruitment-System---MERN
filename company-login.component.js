import React, {Component} from 'react';
import axios from 'axios';

export default class companylogin extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePass  = this.onChangePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            pass: ''
          
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePass(e) {
        this.setState({
            pass: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.pass}`);

        const newTodo = {
            email: this.state.email,
            pass: this.state.pass,
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            email: '',
            pass: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Company Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.pass}
                                onChange={this.onChangePass}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                        <input type="submit" value="Cancel" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
