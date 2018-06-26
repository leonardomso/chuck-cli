const req = require('../src/requests.js');
const fetch = require('node-fetch');

/*
    These are not the real tests, I'm still having some problems with
    test API calls with fetch. 
*/

describe('Requests', () => {
    it('Request joke should return a joke.', async () => {
        expect(req.requestJoke()).toBeDefined();
    });

    it('Request categories should return all the categories.', async () => {
        expect(req.requestCategories()).toBeDefined();
    });

    it('Request categorie should return a specific joke based on categorie.', async () => {
        expect(req.requestSpecificCategorie('history')).toBeDefined();
    });
});
