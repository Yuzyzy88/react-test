import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactMe extends Component {
    constructor() {
        super();

        this.state = {
            Fullname: '',
            Email: '',
            Problem: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state)
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormFieldcontactme">
                    <label htmlFor="Fullname">Fullname</label>
                    <input type="text" id="Fullname" name="Fullname" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="FormFieldcontactme">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="Email" name="Email" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="FormFieldcontactme">
                    <label htmlFor="Problem">Problem</label>
                    <textarea type="text" id="Problem" name="Problem" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <button className="FormField__Button mr-20" >Send</button>
                </div>
            </form>
        );
    }
}
export default ContactMe;

