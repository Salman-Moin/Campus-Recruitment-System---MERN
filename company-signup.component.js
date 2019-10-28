import React, {Component} from 'react';
import axios from 'axios';

export default class Companysignup extends Component {

    constructor(props) {
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeCompanAddress = this.onChangeCompanAddress.bind(this);
        this.onChangeCompnayEmail = this.onChangeCompnayEmail.bind(this);
        this.onChangeCompanyPhone = this.onChangeCompanyPhone.bind(this);
        this.onChangeCompnayPass = this.onChangeCompnayPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            company_name: '',
            company_address: '',
            company_email: '',
            company_phone: '',
            company_website: '',
            company_pass: '',
            copmany_block: false
        }
    }

    onChangeCompanyName(e) {
        this.setState({
            company_name: e.target.value
        });
    }
    onChangeCompanAddress(e) {
        this.setState({
            company_address: e.target.value
        });
    }

    onChangeCompnayEmail(e) {
        this.setState({
            company_email: e.target.value
        });
    }

    onChangeCompanyPhone(e) {
        this.setState({
            company_phone: e.target.value
        });
    }

    onChangeCompnayPass(e) {
        this.setState({
            company_pass: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Company Name: ${this.state.company_name}`);
        console.log(`Company Address: ${this.state.company_address}`);
        console.log(`Company Email: ${this.state.company_email}`);
        console.log(`Company Phone: ${this.state.company_phone}`);
        console.log(`Company Website: ${this.state.company_website}`);
        console.log(`Company Password: ${this.state.company_pass}`);

        const newTodo = {
            company_name: this.state.company_name,
            company_address: this.state.company_address,
            company_email: this.state.company_email,
            company_phone: this.state.company_phone,
            company_website: this.state.company_website,
            company_pass: this.state.company_pass,

        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            company_name: '',
            company_address: '',
            company_email: '',
            company_phone: '',
            company_website: '',
            company_pass: '',
            company_block: false
         
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Company Signup</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company_name}
                                onChange={this.onChangeCompanyName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company_address}
                                onChange={this.onChangeCompanyAddress}
                                />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company_email}
                                onChange={this.onChangeCompanyEmail}
                                />
                    </div>

                    <div className="form-group">
                        <label>Phone: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company_phone}
                                onChange={this.onChangeCompanyPhone}
                                />
                    </div>

                    <div className="form-group">
                        <label>Website: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company_website}
                                onChange={this.onChangeCompanyWebsite}
                                />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company_pass}
                                onChange={this.onChangeCompanyPass}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Company Signup" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}