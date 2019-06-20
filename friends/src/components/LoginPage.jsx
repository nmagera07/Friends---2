import React from 'react'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn: false,
            user: '',
            password: ''
         }
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() { 
        return ( 
            <div>
                <h1>Login</h1>
                <form>
                    <p>Username: </p>
                    <input
                        type="text"
                        name="user"
                        value={this.state.user}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Password: </p>
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    ></input>
                    <button>Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginPage;