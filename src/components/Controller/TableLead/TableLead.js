import React, { Component } from 'react';
import logo from "../../../assets/images/elogroup.png";
import './lead.css';
import { Redirect } from 'react-router';


class TableLead extends Component {

    constructor(props) {
        super(props);
        this.state = {
          redirect:false,  
        } 
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
                    <table className="table-main" striped bordered responsive hover>
                        <thead>
                            <tr>
                                <th>Cliente Potencial</th>
                                <th>Dados Confirmados</th>
                                <th>Reunião Agendada</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Oi</td>
                                <td>Oi</td>
                                <td>Oi</td>
                            </tr>
                            <tr>
                                <td>Oi</td>
                                <td>Oi</td>
                                <td>Oi</td>
                            </tr>
                            <tr>
                                <td>Oi</td>
                                <td>Oi</td>
                                <td>Oi</td>
                            </tr>
                            <tr>
                                <td>Oi</td>
                                <td>Oi</td>
                                <td>Oi</td>
                            </tr>
                            {/*
                        this.props.leads.map((lead, index) => {
                            return (
                                <td key={index}>
                                    {console.log("teste")}
                                </td>
                            );
                            })*/}
                        </tbody>
                    </table>

                </section>
            );
        }
    }
}


export default TableLead;