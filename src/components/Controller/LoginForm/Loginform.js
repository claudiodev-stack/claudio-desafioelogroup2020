import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import '../UserForm/register.css'
import { Redirect } from 'react-router';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            password: '',
            redirect: false
        };

        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUser = event => {
        this.setState({ usuario: event.target.value });
    }
    
    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleLocalStorageLogin = event => {

        event.preventDefault();

        const { usuario, password} = this.state;

        if (password.length < 8 ) {
            this.setState({ senhaMenor: true });
            return;
        }

        this.setState({ senhaMenor: false });

        const storedNames = JSON.parse(localStorage.getItem("@elo-group")) || [];

        const novoNome = {
            usuario,
            password,
        };

        storedNames.push(novoNome)

        localStorage.setItem('@elo-group', JSON.stringify(storedNames));
        window.location.reload();
    };

    componentDidMount() {
        const storedNames = JSON.parse(localStorage.getItem("@elo-group"));
    }

    chamaLead = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/lead/" />
        } else {
            return (
                <section className="register-container">
                    <header className="register-header">
                        <nav className="nav-logo">
                            <img className="image-logo" src={logo} alt="Elogroup-logo" />
                        </nav>
                        <form className="form-control" onSubmit={this.handleLocalStorageLogin}>
                            <div className="form-group">
                                <label className="user-label">Usuário*</label>
                                <input className="input-group" onChange={this.handleUser} value={this.state.usuario} name="usuario" type="text" required placeholder="Nome de usuário" />
                            </div>
                            <div className="form-group">
                                <label className="user-label">Password*</label> 
                                <input className="input-group" onChange={this.handlePassword} value={this.state.password} name="password" type="password" required placeholder="Password" />
                            </div>
                            <button className="btn-registrar" onClick={() => this.chamaLead()}>Logar</button>
                        </form>
                    </header>
                </section>
            );
        }
    }
}

export default LoginForm;