import React from 'react';
import { shallow } from 'enzyme';
import UserStory from './UserStory';

describe("Check Button clicks", () => {
    
    it("click on deliver", () => {
        const spy = jest.fn();
        const wrapper = shallow(<UserStory updateStatus={spy}/>);
        const deliverButton = wrapper.find('button[data-behavior="deliver"]');
        deliverButton.simulate('change');
        expect(spy.mock.calls.length).toBe(1);
        expect(spy.mock.calls[0][0]).toBe('delivered');
    })

    it("click on finish", () => {
        const spy = jest.fn();
        const wrapper = shallow(<UserStory updateStatus={spy}/>);
        const deliverButton = wrapper.find('button[data-behavior="finish"]');
        deliverButton.simulate('click');
        expect(spy.mock.calls.length).toBe(1);
        expect(spy.mock.calls[0][0]).toBe('finished');
    })
})
