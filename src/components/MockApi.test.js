import fetchMock from 'fetch-mock'

describe("Fetch from mock api", () => {

    it("mock get request", async () => {
        fetchMock.get('mockApi/some', 
            {
              "id": 1,
              "some": "thing",
            },
          )
        const resp = await fetch('mockApi/some');
        const data = await resp.json();
        expect(data.id).toEqual(1);
        expect(data.some).toEqual("thing");
        
    })
})