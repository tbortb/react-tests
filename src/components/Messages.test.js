import React from 'react';
import ReactDOM from 'react-dom';
import Expenses from './Messages';

describe("Smoke test for Messages", () => {
    it("test valid input", () => {
        const expenses = [
            { date: '2017-04-05', amount: 0 },
            { date: '2017-04-05', amount: 4 },
          ]

          const div = document.createElement('div')
          ReactDOM.render(
            <Expenses expenses={expenses} />
            , div)
    })

    it("test empty input", () => {
        const expenses = [];
        const div = document.createElement('div')
          ReactDOM.render(
            <Expenses expenses={expenses} />
            , div)
    })
})