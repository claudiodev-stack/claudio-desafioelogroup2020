import React, { useState } from 'react';
import logo from "../../assets/images/elogroup.png";
import './register.css'

function UserForm(enviar, validarPassword) {

        const [usuario, setNome] = useState("");
        const [password, setPassword] = useState("");
        return (
            <section className="register-container">
                <header className="register-header">
                    <nav className="nav-logo">
                        <img className="image-logo" src={logo} alt="Elogroup-logo" />
                    </nav>
                    <form className="form-control">
                        <div className="form-group">
                            <label className="user-label">Usuário*</label>
                            <input className="input-group" type="text" required placeholder="Nome de usuário" />
                        </div>
                        <div className="form-group">
                            <label className="user-label">Password*</label>
                            <input className="input-group" type="password" required placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label className="user-label">Confirmação Password*</label>
                            <input className="input-group" type="password" required placeholder="Confirmar Password" />
                        </div>
                        <button className="btn-registrar">Registrar</button>
                    </form>
                </header>
            </section>
        );
    }

function validarPassword(password){

}

export default UserForm;