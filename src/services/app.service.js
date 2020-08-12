
const DisplayLine = require("../views/display_line.view");   
const DisplayTime = require("../views/display_time.view");
const DisplayData = require("../views/display_data.view");
const DisplayPercent = require("../views/display_percent.view");

class App {
    constructor(){
        this.displayLine = new DisplayLine();
        this.rl = this.displayLine.getReadLine();    
        this.mount();
    }
    mount(){
        this.displayTime = new DisplayTime(this.rl);
        this.displayData = new DisplayData(this.rl);
        this.displayPercent = new DisplayPercent(this.rl);
    }

    run(){      
        this.rl.question('\n\nVocê quer converter Dados, Tempo ou Porcentagem?\n\nInforme d para dados, t para tempo e p para porcentagem: ', (res) => {
            if(res=='t'){      
                this.displayTime.display();
            }else if(res=='d'){      
                this.displayData.display();
            }else if(res=='p'){
                this.displayPercent.display();
            }else{
              console.log(`Desculpe. Não entendi o que você quer converter`);
              this.run();
            }
          });
    }

}
module.exports = App;