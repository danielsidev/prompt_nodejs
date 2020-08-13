
let Data = require('../../src/controllers/data.controller');
describe('Data Controller', () => {
    const data = 30000000;
    it('should return Bytes', async () => {
        let dt = 1000;
        let bytes = new Data(dt);
            bytes.setBytes();
        let response  = bytes.objResponse;             
        expect(response.value).toBe(dt);    
        expect(response.unity).toBe('B');
    });

    it('should return Kilobytes', async () => {
        let bytes = new Data(data);
            bytes.setKilobytes()
        let response  = bytes.objResponse;    
        let kb = data / 1000;         
        expect(response.value).toBe(kb);    
        expect(response.unity).toBe('KB');
    });

    it('should return Megabytes', async () => {
        let bytes = new Data(data);
            bytes.setMegabytes();
        let response  = bytes.objResponse;    
        let mb = data / (1000*1000);         
        expect(response.value).toBe(mb);    
        expect(response.unity).toBe('MB');
    });

    it('should return Data Convert to Bytes', async () => {
        let dt = 999;
        let bytes    = new Data(dt);
        let response = bytes.converter()                 
        expect(response.value).toBe(dt);    
        expect(response.unity).toBe('B');
    });

    it('should return Data Convert to Kilobytes', async () => {
        let dt = 90000;
        let bytes    = new Data(dt);
        let response = bytes.converter()        
        let kb = dt / 1000;         
        expect(response.value).toBe(kb);    
        expect(response.unity).toBe('KB');
    });

    it('should return Data Convert to Megabytes', async () => {
        let bytes    = new Data(data);
        let response = bytes.converter()        
        let mb = data / (1000*1000);         
        expect(response.value).toBe(mb);    
        expect(response.unity).toBe('MB');
    });
 
 });