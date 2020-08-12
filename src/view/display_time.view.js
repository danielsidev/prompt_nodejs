let NumberAccept = require("../utils/number_accept.utils");
let Time = require("../controller/time.controller");

class DisplayTime{

    constructor(rl){
        this.rl = rl;
    }

    display(){
        console.log(`\n\nCerto: Você quer converter Tempo!`);
        this.rl.question('\n\n\Por favor, informe um número em ms(milisegundos): ', (answer) => {
          let numberAccept = new NumberAccept(answer);
          if(numberAccept.integerCheck() ){
            let time = new Time(answer);
            let converted = time.converter();
            console.log(`${answer} milisegundos é igual a ${converted.value} ${converted.unity}`);
            this.rl.close();
          }else{
            console.log(`\n\n\Precisamos que um número seja informado. Tente novamente!`);
            this.display();
          }
        });
      }
}

module.exports = DisplayTime;