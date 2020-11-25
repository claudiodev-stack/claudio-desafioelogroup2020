import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import './lead.css';
import { Redirect } from 'react-router';

class TableLead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            potenciais: [],
            redirect: false,
        }
    }

    componentDidMount() {
        const storedNames = JSON.parse(localStorage.getItem("@elo-group")) || [];
        this.setState({ potenciais: storedNames });
    }

    chamaNovoLead = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/novolead/" />
        } else {
            return (
                <section>
                    <header className="lead-container">
                        <nav className="leads-logo">
                            <img className="leads-image" src={logo} alt="EloGroup-Logo" />
                            <h1>Painel de Leads</h1>
                        </nav>
                    </header>
                    <button className="btn-cadastrar" onClick={() => this.chamaNovoLead()}>Novo Lead (+)</button>
                    <table className="table-main">
                        <thead>
                            <tr>
                                <th>Cliente Potencial</th>
                                <th>Dados Confirmados</th>
                                <th>Reunião Agendada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.potenciais.map(item => {
                                return (
                                    <tr key={item.nome}>
                                        <td>{item.nome} - {item.email} - {item.telefone}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </section>
            );
        }
    }
}


export default TableLead;