
let Time = require('../../src/controllers/time.controller');
describe('Time Controller', () => {
    const time = 1000000;
    it('should return Miliseconds', async () => {
        let ti = 999;
        let ms = new Time(ti);
            ms.setMilliseconds();
        let response  = ms.objResponse;             
        expect(response.value).toBe(ti);    
        expect(response.unity).toBe('ms');
    });

    it('should return Seconds', async () => {
        let ms = new Time(time);
            ms.setSeconds()
        let response  = ms.objResponse;    
        let s = time / 1000;         
        expect(response.value).toBe(s);    
        expect(response.unity).toBe('s');
    });

    it('should return Minutes', async () => {
        let ms = new Time(time);
            ms.setMinutes()
        let response  = ms.objResponse;    
        let min = time / (1000*60);         
        expect(response.value).toBe(min);    
        expect(response.unity).toBe('min');
    });

    it('should return Hours', async () => {
        let ms = new Time(time);
            ms.setHours()
        let response  = ms.objResponse;    
        let h = time / ((1000*60) *60);         
        expect(response.value).toBe(h);    
        expect(response.unity).toBe('h');
    });

    it('should return Time Convert to Miliseconds', async () => {
        let ti = 999;
        let ms = new Time(ti);
        let response =  ms.converter()
        expect(response.value).toBe(ti);    
        expect(response.unity).toBe('ms');
    });

    it('should return Time Convert to Seconds', async () => {
        let ti = 50000;
        let ms = new Time(ti);
        let response =  ms.converter()        
        let s = ti / 1000;         
        expect(response.value).toBe(s);    
        expect(response.unity).toBe('s');
    });

    it('should return Time Convert to Minutes', async () => {
        let ti = 150000;
        let ms = new Time(ti);
        let response = ms.converter()        
        let min = ti / (1000*60);          
        expect(response.value).toBe(min);    
        expect(response.unity).toBe('min');
    });
    it('should return Time Convert to Hours',  async () => {
        let ti =  6000000;
        let ms = new Time(ti);
        let response =  ms.converter();        
        let h = ti / ((1000*60) *60);  
        expect(response.value).toBe(h);    
        expect(response.unity).toBe('h');
    });
 
 });