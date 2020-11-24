import React from 'react';
import logo from "../../assets/images/elogroup.png";
import '../UserForm/register.css'

function LoginForm() {
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
                    <button className="btn-registrar">Logar</button>
                </form>
            </header>
        </section>
    );
}

export default LoginForm;