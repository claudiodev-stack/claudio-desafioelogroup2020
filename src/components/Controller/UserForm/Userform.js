import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import './register.css';
import { Redirect } from 'react-router';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            password: '',
            confirmpass: '',
            redirect: false,
            senhaMenor: false,
        };

        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleUser = event => {
        this.setState({ usuario: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleConfirm = event => {
        this.setState({ confirmpass: event.target.value });
    }


    handleLocalStorageRegister = event => {
        event.preventDefault();

        const { usuario, password, confirmpass } = this.state;

        if (password.length < 8 ) {
            this.setState({ senhaMenor: true });
            return;
        }

        this.setState({ senhaMenor: false });

        const storedNames = JSON.parse(localStorage.getItem("@elo-group")) || [];

        const novoNome = {
            usuario,
            password,
            confirmpass,
        };

        storedNames.push(novoNome)

        localStorage.setItem('@elo-group', JSON.stringify(storedNames));
        window.location.reload();
    };

    componentDidMount() {
        const storedNames = JSON.parse(localStorage.getItem("@elo-group"));
    }

    chamaLogin = () => {
        this.setState({
            redirect: true
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/login/" />
        } else {
            return (
                <section className="register-container">
                    <header className="register-header">
                        <nav className="nav-logo">
                            <img className="image-logo" src={logo} alt="Elogroup-logo" />
                        </nav>
                        <form className="form-control" onSubmit={this.handleLocalStorageRegister}>
                            <div className="form-group">
                                <label className="user-label">Usuário*</label>
                                <input className="input-group" type="text" onChange={this.handleUser} value={this.state.usuario} name="usuario" id="usuario" required placeholder="Nome de usuário" />
                            </div>
                            <div className="form-group">
                                <label className="user-label">Password*</label>
                                <input className="input-group" type="password" onChange={this.handlePassword} value={this.state.password} name="password" id="password" required placeholder="Password" />
                            </div>
                            <div className="form-group">
                                {this.state.senhaMenor && (<div>Senha Errada</div>)}
                                <label className="user-label">Confirmação Password*</label>
                                <input className="input-group" type="password" name="confirmpass" onChange={this.handleConfirm} value={this.state.confirmpass} id="confirmpass" required placeholder="Confirmar Password" />
                            </div>
                            <button className="btn-registrar" onClick={() => this.chamaLogin()}>Registrar</button>
                        </form>
                    </header>
                </section>
            );
        }
    }
}



export default UserForm;