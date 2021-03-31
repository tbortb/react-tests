import { mount } from 'enzyme'
import AddNumbers from './AddNumbers'
import renderer from 'react-test-renderer'
import React from 'react'
import ReactDOM from 'react-dom'

describe("Test AddNumbers component", () => {

    it("renders appropriatly", () => {
        const wrapper = mount(<AddNumbers />);
        wrapper.find("button").simulate("click");
        expect(wrapper.find("Number").length).toBeGreaterThanOrEqual(2);
    })
})