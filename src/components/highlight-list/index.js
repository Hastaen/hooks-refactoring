import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class HighlightList extends Component {
    state = {list: []};

    componentDidMount(){
        if(this.props.inputList.length > 0) {
            const transformedList = this.props.inputList.map((listItem) => 
                ({ ...listItem, isChosen: false }));
            this.setState({list: transformedList});
        }
    }

    chooseListItem = (id) => {
        const updatedList = this.state.list.map((listItem) => {
            if(id === listItem.id) {
                return { ...listItem, isChosen: true }
            }
            return { ...listItem, isChosen: false }
        });
        this.setState({list: updatedList});
    }

  
    render() {
      return (
        <Fragment>
          {this.state.list.length > 0 &&
            this.state.list.map((listItem) => (
                <button
                    className={listItem.isChosen ? "btn-chosen" : "btn-default"}
                    type='button'
                    key={listItem.id}
                    onClick={() => this.chooseListItem(listItem.id)}        
                >
                    {listItem.value}
                </button>
            ))  
          }
        </Fragment>
      );
    }
}

HighlightList.propTypes = {
    inputList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    })),
};


export default HighlightList;
  