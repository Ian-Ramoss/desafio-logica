// Função para calcular o saldo e determinar o nível
function calcularSaldo(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe a mensagem final
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}


calcularSaldo(85, 10); 
