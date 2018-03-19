import React, { Component } from 'react';
import {Input } from './Input';
import ServiceGoogle from '../services/ServiceGoogle';
export class AddressForm extends Component{

    constructor(){
        super();
        
        this.state = {
            latLng: {lat: 0 , lng: 0}
        }
    }
    save(event){
        event.preventDefault();
        const servicePoint = {
            address: this.inputAddress.value,
            latLng: this.state.latLng
        }
        this.props.save(servicePoint)
    }
    foundAddress(address){
        if(!address || address.results.length === 0){
            return;
        }
        let { latLng } = this.state;
        address.results.map((serviceLocation)=>{
            const {lat, lng } = serviceLocation.geometry.location;
            latLng = {lat, lng};
        });
        this.setState({latLng});
    }

    search(){
        new ServiceGoogle()
            .get(this.inputAddress.value)
            .then(this.foundAddress.bind(this))
            .catch(console.log)
    }

    render(){
        const { servicePoint } = this.state;
        return(
            <form method='post' onSubmit={this.save.bind(this)}>
                <input type='text' placeholder='Endereço' ref={(input)=>{this.inputAddress = input}} />
                <input type='text' placeholder='estado' ref={(input)=>{this.inputState = input}} />
                <input type='text' placeholder='cidade' ref={(input)=>{this.inputCity = input}} />

                <button type='submit'>Salvar</button>
                <button type='button' onClick={this.search.bind(this)}>buscar</button>
                <button>Limpar</button>
            </form>
        );
    }
}