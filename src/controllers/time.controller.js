class Time {
    constructor(time){
        this.ms          = 1;
        this.sec         = this.ms * 1000;
        this.min         = this.sec * 60;
        this.hou         = this.min *60;
        this.objResponse = {value:0, unity:''};
        this.time        = time;
    }

    setMilliseconds(){
        this.objResponse.value = this.time;
        this.objResponse.unity = 'ms';
    }

    setSeconds(){
        this.objResponse.value = (this.time / this.sec);
        this.objResponse.unity = 's';
    }
    setMinutes(){
        this.objResponse.value = (this.time / this.min);
        this.objResponse.unity = 'min';
    }
    setHours(){
        
        this.objResponse.value = (this.time / this.hou);
        this.objResponse.unity = 'h';
    }
    converter(){
        if(this.time < this.sec){
            this.setMilliseconds();
        }else if(this.time >=this.sec && this.time < this.min){
            this.setSeconds();
        }else if(this.time >=this.min && this.time < this.hou){
            this.setMinutes();
        }else if(this.time>=this.hou){
            this.setHours();
        }
        return this.objResponse;
      }

}

module.exports = Time;