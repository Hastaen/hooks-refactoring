import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class SimpleCoolTable extends Component {
    state = { rows: [] };

    componentDidMount(){
        if(this.props.inputRows.length > 0) {
            const initialRows = this.props.inputRows.map((inputRow) => 
                ({ ...inputRow, isNew: true }));
            this.setState({rows: initialRows});
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.inputRows.length !== prevProps.inputRows.length ) {
            const previousRowsResetted = prevProps.inputRows
                .map((inputRow) => ({ ...inputRow, isNew: false }));
            const updatedRows = [
                ...previousRowsResetted,
                {
                    ...this.props.inputRows[this.props.inputRows.length - 1],
                    isNew: true
                }
            ]
            this.setState({rows: updatedRows});
        }
    }
  
    render() {
      return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rows.length > 0 &&
                        this.state.rows.map((row) => (
                            <tr 
                                key={row.id}
                                className={row.isNew ? "row-new" : "row-default"}
                            >
                                <td>{row.name}</td>
                                <td>{row.password}</td>
                                <td>{row.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
          </table>
        </Fragment>
      );
    }
}

SimpleCoolTable.propTypes = {
    inputRows: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })),
};


export default SimpleCoolTable;
  