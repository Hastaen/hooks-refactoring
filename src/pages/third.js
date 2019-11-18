import React, { Component } from 'react';
import faker from 'faker';
import SimpleCoolTable from '../components/simple-cool-table';

import './styles.css'

const getRandomData = () => {
    const newRandomData = {
        id: faker.random.uuid(),
        name: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
    }
    return newRandomData;
}

class Third extends Component {
    state = {tableData: [getRandomData()]};
    
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
                getRandomData()
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