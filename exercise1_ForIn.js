const prompt = require("prompt-sync")()

/*
1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

let car = {
    mark: "Fiat",
    model: "Uno",
    year: 2020,
    color: "Branco"
}


for (let prop in car) {
    console.log(prop + ":" + car[prop])
}

/*Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. 
Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. 
Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, o programa criará um objeto car com as propriedades mark (marca), 
model (modelo), year (ano) e color (cor).
O programa utilizará um loop for...in para iterar sobre as propriedades do objeto car e
exibirá o nome de cada propriedade e seu respectivo valor no console.
*/

