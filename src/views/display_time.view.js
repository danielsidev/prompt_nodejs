let NumberAccept = require("../utils/number_accept.utils");
let Time = require("../controllers/time.controller");

class DisplayTime{

    constructor(rl){
        this.rl = rl;
    }

    display(){
        console.log(`\n\nCerto: Você quer converter Tempo!`);
        this.rl.question('\n\n\Por favor, informe um número em ms(milisegundos).\n\n\Exemplo: 1400 ms\n\n ', (answer) => {
          let res = answer.split(" ");
          let numberAccept = new NumberAccept(res[0]);
          if(numberAccept.integerCheck() ){
            let time = new Time(res[0]);
            let converted = time.converter();
            console.log(` ${converted.value} ${converted.unity}`);
            this.rl.close();
          }else{
            console.log(`\n\n\Precisamos que um número seja informado. Tente novamente!`);
            this.display();
          }
        });
      }
}

module.exports = DisplayTime;