import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import '../TableLead/lead.css';
import '../UserForm/register.css';
import './addlead.css';
import { Redirect } from 'react-router';

class AddLead extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            telefone: '',
            email: '',
            oportunidades: [],
            redirect: false,
        };

        this.handleNome = this.handleNome.bind(this);
        this.handleTelefone = this.handleTelefone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleOportunidades = this.handleOportunidades.bind(this);
        this.handleTodasOportunidades = this.handleTodasOportunidades.bind(this);
        this.temOportunidade = this.temOportunidade.bind(this);
    }

    handleNome = event => {
        this.setState({ nome: event.target.value });
    }

    handleTelefone = event => {
        this.setState({ telefone: event.target.value });
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleOportunidades = oportunidade => {
        const temOportunidade = this.state.oportunidades.find(item => item === oportunidade);

        if (temOportunidade) {
            this.setState({ oportunidades: this.state.oportunidades.filter(item => item !== oportunidade) });
        } else {
            this.setState({ oportunidades: [...this.state.oportunidades, oportunidade] });
        }
    }

    handleTodasOportunidades = event => {
        const { checked } = event.target;

        if (checked) {
            this.setState({ oportunidades: ['RPA', 'Produto Digital', 'Analytics', 'BPM'] });
        } else {
            this.setState({ oportunidades: [] });
        }
    }

    handleLocalStorageLead = event => {
        event.preventDefault();
        const { nome, telefone, email, oportunidades } = this.state;

        const storedNames = JSON.parse(localStorage.getItem("@elo-group")) || [];

        const novoNome = {
            nome,
            telefone,
            email,
            oportunidades,
        };

        storedNames.push(novoNome)

        localStorage.setItem('@elo-group', JSON.stringify(storedNames));
        this.setState({
            redirect: true
        })
    };

    temOportunidade = oportunidade => {
        return this.state.oportunidades.find(item => item === oportunidade);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/lead/" />
        } else {
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
                            <input className="input-add-group" onChange={this.handleNome} value={this.state.nome} id="nome" type="text" required placeholder="Nome" />
                        </div>
                        <div className="form-add-group">
                            <label className="user-add-label">Telefone*</label>
                            <input className="input-add-group" onChange={this.handleTelefone} value={this.state.telefone} id="telefone" type="number" required placeholder="Telefone" min="0" />
                        </div>
                        <div className="form-add-group">
                            <label className="user-add-label">Email*</label>
                            <input className="input-add-group" onChange={this.handleEmail} value={this.state.email} id="email" type="email" required placeholder="Email" />
                        </div>
                        <table className="table-add-main">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" onChange={this.handleTodasOportunidades} /></th>
                                    <th>Marcar Todas Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" checked={this.temOportunidade('RPA')} onChange={() => this.handleOportunidades('RPA')} /></td>
                                    <td>RPA</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" checked={this.temOportunidade('Produto Digital')} onChange={() => this.handleOportunidades('Produto Digital')} /></td>
                                    <td>Produto Digital</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" checked={this.temOportunidade('Analytics')} onChange={() => this.handleOportunidades('Analytics')} /></td>
                                    <td>Analytics</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" checked={this.temOportunidade('BPM')} onChange={() => this.handleOportunidades('BPM')} /></td>
                                    <td>BPM</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn-salvar" >Salvar</button>
                    </form>
                </section>
            );
        }
    }
}

export default AddLead;