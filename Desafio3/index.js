class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Define o ataque de acordo com o tipo
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi('Gandalf', 300, 'mago');
mago.atacar(); // "O mago atacou usando magia"

const guerreiro = new Heroi('Aragorn', 87, 'guerreiro');
guerreiro.atacar(); // "O guerreiro atacou usando espada"
