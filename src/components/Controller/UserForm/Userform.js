import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import './register.css';
import { Redirect } from 'react-router';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = [{
            usuario: "",
            password: "",
            confirmpass: "",
            redirect: false
        }]
    }

    componentDidMount() {
        const usuario = localStorage.getItem('@elo-group');
        const password = localStorage.getItem('@elo-group');
        const confirmpass = localStorage.getItem('@elo-group');
        console.log(this.setState({ usuario, password, confirmpass }));
    }


    handleLocalStorageRegister = event => {
        const array = [
            event.target.elements.usuario.value,
            event.target.elements.password.value,
            event.target.elements.confirmpass.value,
        ];
        event.preventDefault();
        localStorage.setItem('@elo-group', JSON.stringify(array));
        window.location.reload();
    };


    chamaLogin = () => {
        this.setState({
            redirect: true
        })
    }

    render() {

     //   const { usuario } = this.state;
     //   const { password } = this.state;
     //   const { confirmpass } = this.state;
        
        /*
        if(usuario !== null || password !== null | confirmpass !== null){
            alert("bem vindo" + {usuario});
        }
        */

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
                                <input className="input-group" type="text" name="usuario" id="usuario" required placeholder="Nome de usuário" />
                            </div>
                            <div className="form-group">
                                <label className="user-label">Password*</label>
                                <input className="input-group" type="password" name="password" id="password" required placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label className="user-label">Confirmação Password*</label>
                                <input className="input-group" type="password" name="confirmpass" id="confirmpass" required placeholder="Confirmar Password" />
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