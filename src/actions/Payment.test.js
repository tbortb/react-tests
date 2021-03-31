import configureMockStore from 'redux-mock-store'
import { PAYMENT_REQUEST_STARTED, PAYMENT_REQUEST_SUCCESS, fetchPayments } from './Payment'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
fetchMock.get("/payments", {
    payments: [
        { amount: 10, date: '2017-04-05' },
        { amount: 12, date: '2017-12-05' },
    ]
})

const store = mockStore({ payments: [] });

describe("Test async actions", () => {
    
    it("fetch payments", async () => {
        const expectedActions = [{ type: PAYMENT_REQUEST_STARTED },
        {
            type: PAYMENT_REQUEST_SUCCESS,
            payments: [
                { amount: 10, date: '2017-04-05' },
                { amount: 12, date: '2017-12-05' },
            ]
        }
        ]
        await store.dispatch(fetchPayments())
        
        expect(store.getActions()).toEqual(expectedActions)
    })
})

