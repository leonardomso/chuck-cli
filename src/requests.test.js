const req = require('./requests.js');

describe('Requests', () => {
    test('Request joke should return a joke.', () => {
        expect(req.requestJoke()).toBe(3);
    });

    test('Request categories should return all the categories.', () => {
        expect(req.requestCategories()).toBe({});
    });

    test('Request categorie should return a specific joke based on categorie.', () => {
        expect(req.requestSpecificCategorie()).toBe(3);
    });
});
