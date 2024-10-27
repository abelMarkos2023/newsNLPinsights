const { sendToServer,handleSubmit } = require("../client/js/formHandler")

describe('send to server function is defined', () => {

    test('the function is defined', () => { 

        const form = { addEventListener: jest.fn() }; // Mock form element
        form.addEventListener('submit', handleSubmit);
        expect(sendToServer).toBeDefined()
     })
})