import React, {Component} from 'react';
import { Layout } from 'antd';
import { LeafletMap }  from './LeafletMap';
import { AddressForm } from './AddressForm';
import { IsTable } from './Table';

const { Header, Footer, Sider, Content } = Layout;

export default class Main extends Component {
    constructor(){
        super();
        this.state ={
            services: []
        }
    }

    create(servicePoint){
        const { services } = this.state;
        services.push(servicePoint);
        this.setState(services);
        console.log(services);
    }

    render(){
        return(
        <div >
            <Layout>
              <Layout>
                <Sider>
                    <AddressForm save={this.create.bind(this)}/>
                </Sider>
                <Content>
                  <LeafletMap services={this.state.services} />
                </Content>
              </Layout>
              <Footer> <IsTable services={this.state.services}/> </Footer>
            </Layout>
           
        </div>
        )
    }
}