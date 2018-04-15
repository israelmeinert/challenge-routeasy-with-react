import React, { Component } from 'react';
import { Container } from '../template/bootstrap/bootstrap';
import { layout } from '../template/isreal/isreal';
// import Mapa from '../template/leaflet/leaflet';
import ImportCSV from './import';
import '../css/style.css';

const { Aside, Layout, Content } = layout;
export default class Main extends Component {

  render(){
    return (
      <div>
        <header></header>
        <Container is_fluid='true'>
          <Layout>
            <Aside>
              teste
            </Aside>
            <Content>
              <ImportCSV />
              
            </Content>
          </Layout>
        </Container>
      </div>
    );
  }
}