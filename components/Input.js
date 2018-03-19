import React, { Component } from 'react';

export class Input extends Component{


    render(){
        return(
            <div>
                <label for={this.props.id}> {this.props.label}</label>
                <input type={ this.props.type} name={this.props.name} value={this.props.value} ref={(input)=>{this.props.change(input)}} />
            </div>
        );
    }
}