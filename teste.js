const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const ms  = 1;
const sec = ms * 1000;
const min = sec * 60;
const hou = min *60;

const b  = 1;
const kb =  b * 1000;
const mb =  kb * 1000;

// console.log(`1 segundo => ${sec} milisegundos`);
// console.log(`1 minuto => ${min} milisegundos`);
// console.log(`1 hora => ${hou} milisegundos`);

console.log(`1 byte => ${b} byte`);
console.log(`1 kilobyte => ${kb} bytes`);
console.log(`1 megabyte => ${mb} bytes`);

console.log(`## Sistema de Conversão de Medidas ##`);


function soNumeros(key) { //variavel do parametro recebe o caractere digitado//  
  let regex = /^[0-9\b]+$/;   
  return (regex.test(key))?true:false;
} 

function soNumerosFlutuantes(key){
  // let regex = /^[+-]?\d+(\.\d+)?$/;   
  let regex = /^(\d*\.)?\d+$/;   
  // [+-]?([0-9]*[.])?[0-9]+
  return (regex.test(key))?true:false;
}

let objResponse = {value:0, unity:''};

function timeConvert(time){
  if(time < sec){
    objResponse.value = time;
    objResponse.unity = 'ms';
  }else if(time >=sec && time < min){
    objResponse.value = (time / sec);
    objResponse.unity = 's';
  }else if(time >=min && time < hou){
    objResponse.value = (time / min);
    objResponse.unity = 'min';
  }else if(time>=hou){
    objResponse.value = (time / hou);
    objResponse.unity = 'h';
  }
  return objResponse;
}

function dataConvert(data){
  if(data < b){
    objResponse.value = data;
    objResponse.unity = 'B';
  }else if(data >=kb && data < mb){
    objResponse.value = (data / kb);
    objResponse.unity = 'KB';
  }else if(data >= mb){
    objResponse.value = (data / mb);
    objResponse.unity = 'MB';
  }
  return objResponse;
}

function percentConvert(per){
  let value = parseFloat(per)
  objResponse.value = Math.round(value * 100);
  objResponse.unity = '%';
  return objResponse;
}


function promptConvertTime(){
  rl.question('\n\n\Por favor, informe um número em ms(milisegundos): ', (answer) => {
    if(soNumeros(answer) ){
      let converted = timeConvert(answer)
      console.log(`${answer} milisegundos é igual a ${converted.value} ${converted.unity}`);
      rl.close();
    }else{
      console.log(`\n\n\Precisamos que um número seja informado. Tente novamente!`);
      promptConvertTime();
    }
  });
}

function promptConvertData(){
  rl.question('\n\nPor favor, informe um número em bytes: ', (answer) => {
    if(soNumeros(answer) ){
      let converted = dataConvert(answer)
      console.log(`${answer} byte(s) é igual a ${converted.value} ${converted.unity}`);
      rl.close();
    }else{
      console.log(`\n\nPrecisamos que um número seja informado. Tente novamente!`);
      promptConvertData();
    }
  });
}

function promptConvertPercent(){
  rl.question('\n\nPor favor, informe um número decimal(ex:0.14): ', (answer) => {
    if(soNumerosFlutuantes(answer) ){
      let converted = percentConvert(answer)
      console.log(`${answer}  é igual a ${converted.value} ${converted.unity}`);
      rl.close();
    }else{
      console.log(`\n\nPrecisamos que um número decimal seja informado. Tente novamente!`);
      promptConvertPercent();
    }
  });
}
function start(){
  rl.question('\n\nVocê quer converter Dados, Tempo ou Porcentagem?\n\nInforme d para dados, t para tempo e p para porcentagem: ', (res) => {
    if(res=='t'){
      console.log(`\n\nCerto: Você quer converter Tempo!`);
      promptConvertTime();
    }else if(res=='d'){
      console.log(`\n\n\Certo: Você quer converter Dados!`);
      promptConvertData();
    }else if(res=='p'){
      console.log(`\n\nCerto: Você quer converter Porcentagem!`);
      promptConvertPercent();
    }else{
      console.log(`Desculpe. Não entendi o que você quer converter`);
      start();
    }
  });
}

start();
