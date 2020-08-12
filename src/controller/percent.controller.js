class Percent {
    constructor(number){
        this.objResponse = {value:0, unity:''};
        this.value = 0;
        this.number      = number;
    }
    setValue(){
        this.value = parseFloat(this.number)
    }
    setPercent(){
        this.setValue();        
        this.objResponse.value = Math.round(this.value * 100);
        this.objResponse.unity = '%';
    }
    converter(){
        this.setPercent();
        return this.objResponse;
    }
}

module.exports = Percent;