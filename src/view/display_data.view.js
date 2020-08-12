let NumberAccept = require("../utils/number_accept.utils");
let Data = require("../controller/data.controller");

class DisplayTime{

    constructor(rl){
        this.rl = rl;
    }

    display(){
        console.log(`\n\n\Certo: Você quer converter Dados!`);
        this.rl.question('\n\nPor favor, informe um número em bytes: ', (answer) => {
            let numberAccept = new NumberAccept(answer);
            if(numberAccept.integerCheck() ){
              let data = new Data(answer);
              let converted = data.converter();
              console.log(`${answer} byte(s) é igual a ${converted.value} ${converted.unity}`);
              this.rl.close();
            }else{
              console.log(`\n\nPrecisamos que um número seja informado. Tente novamente!`);
              this.display();
            }
        });
    }
}

module.exports = DisplayTime;