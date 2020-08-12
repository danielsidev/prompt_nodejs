const readline = require('readline');

class DisplayLine{

    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
    }
    getReadLine(){
        return this.rl;
    }
}

module.exports = DisplayLine;