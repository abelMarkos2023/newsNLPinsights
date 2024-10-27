const { checkTheURL } = require("../client/js/urlChecker")

describe('checkTheURL function is defined ', () => {

    test('the function is defined', () => { 
        expect(checkTheURL).toBeDefined()
     })

     test("it returns true  ", () => {

        expect(checkTheURL("https://www.wxample.com")).toBe(true);
        expect(checkTheURL("http://www.example.com")).toBe(true);
        expect(checkTheURL("https://www.wxample.com/articles?sort=desc")).toBe(true);



     })
     test("it returns false  ", () => {

        expect(checkTheURL("Hello")).toBe(false);
        expect(checkTheURL("invalid-url")).toBe(false);
        expect(checkTheURL("Hello///www.example.com")).toBe(false);
        expect(checkTheURL("/xample.com/articles?sort=desc")).toBe(false);



     })
})