import React from 'react';
import { mount } from 'enzyme';
import SimpleCoolTable from './index';

const intialMockList = [
    {
        id: 1,
        name: "Brandon",
        password: "hunter2",
        email: "akira94@hotmail.com"
    },
    {
        id: 3,
        name: "Mark",
        password: "hunter14",
        email: "titanic97@hotmail.com"
    },
] 

describe('SimpleCoolTable test', () => {
    it('Should render component', () => {
        const wrapper = mount(<SimpleCoolTable inputRows={intialMockList} />);
        expect(wrapper.find(SimpleCoolTable)).toBeDefined();
    });

    it('Intial input should all have the isNew attr', () => {
        const wrapper = mount(<SimpleCoolTable inputRows={intialMockList} />);
        const stateRows = wrapper.state().rows;
        expect(stateRows.length).toBe(2);
        expect(stateRows[0].isNew).toBe(true);
        expect(stateRows[1].isNew).toBe(true);
    });
    
    it('Updated props that have more rows in array should reset isNew on earlier rows', () => {
        const updatedRows = [
            ...intialMockList,
            {
                id: 7,
                name: "Lena",
                password: "jonasBrothers4life",
                email: "houseofa1000corpses@gmail.com"
            },
        ]
        const wrapper = mount(<SimpleCoolTable inputRows={intialMockList} />);
        const stateRows = wrapper.state().rows;
        expect(stateRows.length).toBe(2);
        expect(stateRows[0].isNew).toBe(true);
        expect(stateRows[1].isNew).toBe(true);
        wrapper.setProps({ inputRows: updatedRows });
        const updatedStateRows = wrapper.state().rows;
        expect(updatedStateRows.length).toBe(3);
        expect(updatedStateRows[0].isNew).toBe(false);
        expect(updatedStateRows[1].isNew).toBe(false);
        expect(updatedStateRows[2].isNew).toBe(true);
    });
});