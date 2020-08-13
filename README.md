# Sistema de Conversão de Medidas
Sistema em modo console com stdin e stdout para converter medidas tempo, unidades de informação e porcentagem. 

### Instalação

Requer [Node.js](https://nodejs.org/) v12+ 

Abra um terminal, na raiz do projeto, e instale as dependências. 
```sh
$ npm install 
```
Rode os testes

```sh
$ npm test
```
Inicie a aplicação

```sh
$ npm start
```

### Sobre a execução

A aplicação solicita o tipo de conversão que o usuário deseja realizar:

- Para realizar conversões de Data(b, kb, mb), deve digitar a tecla d.
- Para realizar conversões de Tempo(ms, s, min, h), deve digitar a tecla t.
- Para realizar conversões de Porcentagem(%), deve digitar a tecla p.

A cada escolha, a aplicação soicitará que um número seja informado no formato esperado e para isso exibe um exemplo.
A cada número(no formato esperado) digitado, após a tecla ENTER, ocorre a formatação e é exibido abaixo do número digitado.
A aplicação conclui a execução.

Para realizar uma nova formatação deve-se reiniciar a aplicação:

```sh
$ npm start