import React, { Component } from 'react';
import HotTable from 'react-handsontable';

export default class ImportCSV extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = [
      ["Deposito", "Nome do cliente", "endereço", "lat", "long"],
      ['Agile',	'Sé',	'Servidão rio vermelho'],
      ['Agile',	'Sé',	'Servidão rio vermelho'],
      ['Agile',	'Sé',	'Servidão rio vermelho']
    ];
  }

  render() {
    return (
      <div id="example-component">
        <HotTable root="hot" data={this.handsontableData} colHeaders={false} width="600" height="300" stretchH="all" />
      </div>
    );
  }
}
