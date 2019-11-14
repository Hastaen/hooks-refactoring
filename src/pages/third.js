import React, { Component } from 'react';
import SimpleCoolTable from '../components/simple-cool-table';

import './styles.css'

const tableDataSeed = [
    {
        name: "John",
        age: 13,
        hometown: "Shanghai"
    },
];

class Third extends Component {
    state = {tableData: tableDataSeed};
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            tableData: [
                ...this.state.tableData,
                {
                    name: "John",
                    age: 13,
                    hometown: "Shanghai"
                }
            ]
        });
    }
  
    render() {
      return (
        <div className="page-layout">
            <SimpleCoolTable
                inputRows={this.state.tableData}
            />
        </div>
      );
    }
}


export default Third