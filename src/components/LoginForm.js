import React, { Component } from 'react';
import '../App.css';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    }

    handleUserChange(event) {
        this.setState({
            username: event.target.value,
        });
    };

    handlePassChange(event) {
        this.setState({
            password: event.target.value,
        });
    }

    render() {

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>

                    {
                        this.state.error &&
                        <h3 onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }

                    <label className="label">User Name</label>
                    <input type="text" placeholder="name" value={this.state.username} onChange={this.handleUserChange} />

                    <label className="label" >Password</label>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange} />

                    <input className="label" type="submit" value="Log In" />
                </form>

            </div>
        );
    }
}

export default LoginForm;