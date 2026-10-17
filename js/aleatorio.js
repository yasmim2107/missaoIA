
const nomes = [
    "Yasmim",
    "Julia",
    "Eduarda",
    "Marcelo",
    "Amanda",
    "Junior",
    "Gabriel"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export let nome = aleatorio(nomes);

export function sortearNome() {
    const nomeAnterior = nome;

    if (nomes.length > 1) {
        const outrosNomes = nomes.filter(
            item => item !== nomeAnterior
        );
        nome = aleatorio(outrosNomes);
    } else {
        nome = aleatorio(nomes);
    }
}
