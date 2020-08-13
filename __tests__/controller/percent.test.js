
let Percent = require('../../src/controllers/percent.controller');
describe('Percent Controller', () => {
    const value = '0.14';
    it('should return Float Value', async () => {
        let per = new Percent(value);
            per.setValue();
        let response  = per.value            
        expect(response).toBe(0.14);    
    });

    it('should return Percent Object', async () => {
        let per = new Percent(value);
            per.setPercent();
        let response  = per.objResponse;    
        expect(response.value).toBe(14);    
        expect(response.unity).toBe('%');
    });

    it('should return Percent Convert to Percentage',  async () => {
        let per       = new Percent(value);
        let response  = per.converter();
        expect(response.value).toBe(14);    
        expect(response.unity).toBe('%');
    });
 
 });