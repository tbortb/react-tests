import reducer, { FAKE_TYPE } from './FakeReducer';
import deepFreeze from 'deep-freeze'

describe("test fake reducer", () => {

    it("handle FAKE_TYPE", () => {
        //Freeze the state
        const currentState = {
            things: [{name: 'acme'}]
        };
        deepFreeze(currentState);

        const testAction = {
            type: FAKE_TYPE,
            thing: {name: 'widget'}
          }
        
          const expectedState = {
            things: [
              {name: 'acme'},
              {name: 'widget'},
            ]
          }

        expect(reducer(currentState, testAction)).toEqual(expectedState);
    })
})