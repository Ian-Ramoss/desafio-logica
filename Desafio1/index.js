//Realizei o desafio em 2 opções, sendo 1 pré definindo os valores de nome e XP
// Variáveis de nome e XP
let nome = "Dev Brabo";
let xp = 4500;

// Verifica o nível com base no XP
let nivel = "";

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe o resultado
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

console.log("--------------**--------------")
// e a segunda opção de código recebendo a entrada de dados do usuário 
//(dei uma pesquisada pq o "prompt()" não funcionou em Node.js)


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a quantidade de experiência (XP) do herói: ', (xp) => {
        xp = parseInt(xp);

        let nivel;

        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp <= 2000) {
            nivel = "Bronze";
        } else if (xp <= 5000) {
            nivel = "Prata";
        } else if (xp <= 7000) {
            nivel = "Ouro";
        } else if (xp <= 8000) {
            nivel = "Platina";
        } else if (xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        rl.close();
    });
});
