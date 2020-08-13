let NumberAccept = require("../utils/number_accept.utils");
let Percent = require("../controllers/percent.controller");

class DisplayPercent{

    constructor(rl){
        this.rl = rl;
    }

    display(){
        console.log(`\n\n\Certo: Você quer converter Porcentagem!`);
        this.rl.question('\n\nPor favor, informe um número decimal.\n\n\Exemplo: 0.14\n\n ', (answer) => {
            let numberAccept = new NumberAccept(answer);
            if(numberAccept.floatCheck() ){
              let percent = new Percent(answer);
              let converted = percent.converter();
              console.log(` ${converted.value} ${converted.unity}`);
              this.rl.close();
            }else{
                console.log(`\n\nPrecisamos que um número decimal seja informado. Tente novamente!`);
              this.display();
            }
        });
    }
}

module.exports = DisplayPercent;