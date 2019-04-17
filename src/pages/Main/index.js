import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Main extends Component {


    state = {
        newBox: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        await api.post('boxes',{
            title:this.state.newBox
        }).then(res=>{
            this.props.history.push(`/box/${res.data._id}`)
        })


    }

    handleInputChange = (e) =>{
        this.setState({newBox:e.target.value});
    }

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} className="logo-svg" alt="" />
                    <input
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                        placeholder="Criar um box" />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
