import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class SimpleCoolTable extends Component {
    state = {rows: []};
    maxRows = 20;

    componentDidMount(){
        if(this.props.inputRows.length > 0) {
            const initialRows = this.props.inputRows.map((inputRow) => 
                ({ ...inputRow, isNew: true }));
            this.setState({rows: initialRows});
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.inputRows.length !== prevProps.inputRows.length ) {
            const previousRowsResetted = prevProps.inputRows.map((inputRow) => 
                ({ ...inputRow, isNew: false }));
            const updatedRows = [
                ...(previousRowsResetted.length > 20 
                ? 
                previousRowsResetted.slice(10)
                :
                previousRowsResetted),
                {
                    ...this.props.inputRows[this.props.inputRows.length-1],
                    isNew: true
                }
            ]
            if(updatedRows.length > this.maxRows) {

            }
            this.setState({rows: updatedRows});
        }
    }
  
    render() {
      return (
        <Fragment>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Blob</th>
                    <th>Age</th>
                </tr>
                {this.state.rows.length > 0 &&
                        this.state.rows.map((row) => (
                            <tr 
                                className={row.isNew ? "row-new" : "row-default"}
                            >
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                            </tr>
                        ))
                }
          </table>
        </Fragment>
      );
    }
}
/*
SimpleCoolTable.propTypes = {
    inputRows: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    })),
};
*/

export default SimpleCoolTable;
  