class NumberAccept{

    constructor(number){
        this.number       = number;
        this.regexInteger = /^[0-9\b]+$/;
        this.regexFloat   = /^(\d*\.)?\d+$/;
    }

     integerCheck() {
        return (this.regexInteger.test(this.number))?true:false;
      } 
      
      floatCheck(){
        return (this.regexFloat.test(this.number))?true:false;
      }

}

module.exports = NumberAccept