
import React, { Component } from 'react';
import '../App.css';
import FacebookLogin from 'react-facebook-login';

class FbLogin extends Component {
    render() {
        //Check the console after login with facebook
        const responseFacebook = (response) => {
            console.log(response);
        }

        return (
            <div className="App">
                <h2>Login with Facebook</h2>

                <FacebookLogin
                    appId="816936852441476"
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
            </div>
        );
    }
}

export default FbLogin;