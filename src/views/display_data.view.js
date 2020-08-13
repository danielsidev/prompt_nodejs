let NumberAccept = require("../utils/number_accept.utils");
let Data = require("../controllers/data.controller");

class DisplayTime{

    constructor(rl){
        this.rl = rl;
    }

    display(){
        console.log(`\n\n\Certo: Você quer converter Dados!`);
        this.rl.question('\n\nPor favor, informe um número em bytes.\n\nExemplo: 20000 B\n\n ', (answer) => {
          let res = answer.split(" ");
            let numberAccept = new NumberAccept(res[0]);
            if(numberAccept.integerCheck() ){
              let data = new Data(res[0]);
              let converted = data.converter();
              console.log(` ${converted.value} ${converted.unity}`);
              this.rl.close();
            }else{
              console.log(`\n\nPrecisamos que um número seja informado. Tente novamente!`);
              this.display();
            }
        });
    }
}

module.exports = DisplayTime;