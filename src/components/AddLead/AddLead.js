import React from 'react';
import logo from "../../assets/images/elogroup.png";
import '../TableLead/lead.css';
import '../UserForm/register.css';
import './addlead.css';

function AddLead() {
        return (
            <section>
                <header className="lead-container">
                    <nav className="leads-logo">
                        <img className="leads-image" src={logo} alt="EloGroup-Logo" />
                        <h1>Novo Lead</h1>
                    </nav>
                </header>
                <form className="form-add-control">
                    <div className="form-add-group">
                        <label className="user-add-label">Nome*</label>
                        <input className="input-add-group" type="text" required placeholder="Nome" />
                    </div>
                    <div className="form-add-group">
                        <label className="user-add-label">Telefone*</label>
                        <input className="input-add-group" type="number" required placeholder="Telefone" min="0"/>
                    </div>
                    <div className="form-add-group">
                        <label className="user-add-label">Email*</label>
                        <input className="input-add-group" type="email" required placeholder="Email" />
                    </div>
                <table className="table-add-main" striped bordered responsive hover>
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="todos"/></th>
                            <th>Marcar Todas Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" name="opcao"/></td>
                            <td>RPA</td>                           
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="opcao"/></td>
                            <td>Produto Digital</td>                           
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="opcao"/></td>
                            <td>Analytics</td>                           
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="opcao"/></td>
                            <td>BPM</td>                           
                        </tr>
                    </tbody>
                </table>
                <button className="btn-salvar">Salvar</button>
                </form>

            </section>
        );
    }

export default AddLead;