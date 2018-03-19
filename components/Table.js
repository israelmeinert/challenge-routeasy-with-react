import React, { Component } from 'react';

export class isTable extends Component{    

    render(){
        const { services } = this.props;
        return(
            <table>
                <thead>
                    <th>
                        Endereço
                    </th>
                    <th>
                        latitude
                    </th>
                    <th>
                        longitude
                    </th>
                </thead>
                <tbody>
                    { services.map((service)=>{
                        console.log(service)
                        return (
                            <tr>
                                <td>{ service.address }</td>
                                <td>{ service.latLng.lat }</td>
                                <td>{ service.latLng.lng } </td>
                            </tr>
                        )
                    }).join('') }
                </tbody>

            </table>   
        );
    }
}