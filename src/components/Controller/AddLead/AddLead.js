import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import '../TableLead/lead.css';
import '../UserForm/register.css';
import './addlead.css';

class AddLead extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            telefone: "",
            email: "",
            isChecked: false,
        };
    }

    componentDidMount() {
        const nome = localStorage.getItem('@elo-group');
        const telefone = localStorage.getItem('@elo-group');
        const email = localStorage.getItem('@elo-group');
        const oportunidades = localStorage.getItem('@elo-group');
        console.log(this.setState({ nome, telefone, email, oportunidades }));
    }


    handleLocalStorageLead = event => {
        const array = [
            event.target.elements.nome.value,
            event.target.elements.telefone.value,
            event.target.elements.email.value,
            event.target.elements.oportunidades.value,
        ];
        event.preventDefault();
        localStorage.setItem('@elo-group', JSON.stringify(array));
        window.location.reload();
    };

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {

        return (
            <section>
                <header className="lead-container">
                    <nav className="leads-logo">
                        <img className="leads-image" src={logo} alt="EloGroup-Logo" />
                        <h1>Novo Lead</h1>
                    </nav>
                </header>
                <form className="form-add-control" onSubmit={this.handleLocalStorageLead}>
                    <div className="form-add-group">
                        <label className="user-add-label">Nome*</label>
                        <input className="input-add-group" name="nome" type="text" required placeholder="Nome" />
                    </div>
                    <div className="form-add-group">
                        <label className="user-add-label">Telefone*</label>
                        <input className="input-add-group" name="telefone" type="number" required placeholder="Telefone" min="0" />
                    </div>
                    <div className="form-add-group">
                        <label className="user-add-label">Email*</label>
                        <input className="input-add-group" name="email" type="email" required placeholder="Email" />
                    </div>
                    <table className="table-add-main" striped bordered responsive hover>
                        <thead>
                            <tr>
                                <th><input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} /></th>
                                <th>Marcar Todas Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"  checked={this.state.isChecked} onChange={this.toggleChange} name="oportunidades" /></td>
                                <td>RPA</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}  name="oportunidades" /></td>
                                <td>Produto Digital</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}  name="oportunidades" /></td>
                                <td>Analytics</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} name="oportunidades" /></td>
                                <td>BPM</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn-salvar">Salvar</button>
                </form>
            </section>
        );
    }
}

export default AddLead;