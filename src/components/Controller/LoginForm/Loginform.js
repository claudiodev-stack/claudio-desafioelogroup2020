import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import '../UserForm/register.css'
import { Redirect } from 'react-router';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario:"",
            password:"",
            redirect:false
        }
    }

    componentDidMount() {
        const usuario = localStorage.getItem('@elo-group');
        const password = localStorage.getItem('@elo-group');
        console.log(this.setState({ usuario, password }));
    }

    handleLocalStorageLogin = event => {
        const array = [
            event.target.elements.usuario.value,
            event.target.elements.password.value,
        ];
        event.preventDefault();
        localStorage.setItem('@elo-group', JSON.stringify(array));
        window.location.reload();
    };

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
                                <input className="input-group" type="text" required placeholder="Nome de usuário" />
                            </div>
                            <div className="form-group">
                                <label className="user-label">Password*</label>
                                <input className="input-group" type="password" required placeholder="Password" />
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