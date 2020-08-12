
let NumberAccept = require('../src/utils/number_accept.utils');
describe('Integer Numbers', () => {
    it('should return true', async () => {
        let number = Math.floor(Math.random() * 1000000);        
        let numberAccept = new NumberAccept(number)
        let response  = numberAccept.integerCheck()
        expect(response).toBe(true);    
    });

    it('should return false when number is float', async () => {
        let number = 1.4 ;        
        let numberAccept = new NumberAccept(number)
        let response  = numberAccept.integerCheck()
        expect(response).toBe(false);    
    });
    it('should return false when a character is seted', async () => {
        let number = 'hello' ;        
        let numberAccept = new NumberAccept(number)
        let response  = numberAccept.integerCheck()
        expect(response).toBe(false);    
    });
 });