import React from 'react';
import { mount } from 'enzyme';
import SimpleCounterButton from './index';

describe('SimpleCounterButton test', () => {
    it('Should render component', () => {
        const wrapper = mount(<SimpleCounterButton />);
        expect(wrapper.find(SimpleCounterButton)).toBeDefined();
    });

    it('Should update counter on click', () => {
        const wrapper = mount(<SimpleCounterButton />);
        wrapper.instance().updateCounter();
        expect(wrapper.state().counter).toBe(1);
    })
});
