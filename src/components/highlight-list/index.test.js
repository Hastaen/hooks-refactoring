import React from 'react';
import { mount } from 'enzyme';
import HighlightList from './index';

const mockData = [
    {
        value: 'Torsk',
        id: 1     
    },
    {
        value: 'Katt',
        id: 2     
    },
    {
        value: 'Spade',
        id: 3     
    },
]

describe('HighlightList test', () => {
    it('Should render component', () => {
        const wrapper = mount(<HighlightList inputList={mockData} />);
        expect(wrapper.find(HighlightList)).toBeDefined();
    });

    it('Correct amount of buttons', () => {
        const wrapper = mount(<HighlightList inputList={mockData}/>);
        expect(wrapper.find('button')).toHaveLength(3);
    })

    it('Click triggers change in button class', () => {
        const wrapper = mount(<HighlightList inputList={mockData}/>);
        let buttons = wrapper.find('button');
        expect(buttons).toHaveLength(3);
        expect(buttons.at(0).hasClass('btn-default')).toBe(true);
        buttons.at(0).simulate('click');
        wrapper.update();
        expect(wrapper.find('button.btn-default')).toHaveLength(2);
        const clickedButton = wrapper.find('button.btn-chosen'); 
        expect(clickedButton.text()).toBe(mockData[0].value);
    })
});
