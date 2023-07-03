const dls = (grafo, inicio, meta, limite, profundidade = 0) => {
    if (inicio === meta) {
        console.log("Destino alcançado: " + meta);
        return true;
    }

    if (limite === 0) {
        return false;
    }

    console.log(`Visitado: ${inicio}, Limite: ${limite}`);

    const vizinhos = grafo.get(inicio);

    for (let i = 0; i < vizinhos.length; i++) {
        const prox = vizinhos[i];

        console.log(`Visitado: ${prox}, Limite: ${limite - 1}`);
        const encontrou = dls(grafo, prox, meta, limite - 1, profundidade + 1);
        if (encontrou) {
            return true;
        }
    }

    return false;
};

// Criando o grafo
const grafo = new Map();

grafo.set('Arad', ['Zerind', 'Sibiu', 'Timisoara']);
grafo.set('Pitesti', ['Rimnicu Vilcea', 'Craiova', 'Bucharest']);
grafo.set('Urziceni', ['Bucharest', 'Hirsova', 'Vaslui']);
grafo.set('Eforie', ['Hirsova']);
grafo.set('Lugoj', ['Timisoara', 'Mehadia']);
grafo.set('Oradea', ['Zerind', 'Sibiu']);
grafo.set('Neamt', ['Iasi']);
grafo.set('Bucharest', ['Fagaras', 'Pitesti', 'Giurgiu', 'Urziceni']);
grafo.set('Giurgiu', ['Bucharest']);
grafo.set('Zerind', ['Oradea', 'Arad']);
grafo.set('Sibiu', ['Oradea', 'Arad', 'Fagaras', 'Rimnicu Vilcea']);
grafo.set('Mehadia', ['Lugoj', 'Dobreta']);
grafo.set('Iasi', ['Vaslui', 'Neamt']);
grafo.set('Fagaras', ['Sibiu', 'Bucharest']);
grafo.set('Rimnicu Vilcea', ['Sibiu', 'Craiova', 'Pitesti']);
grafo.set('Timisoara', ['Arad', 'Lugoj']);
grafo.set('Dobreta', ['Mehadia', 'Craiova']);
grafo.set('Hirsova', ['Urziceni', 'Eforie']);
grafo.set('Craiova', ['Dobreta', 'Rimnicu Vilcea', 'Pitesti']);
grafo.set('Vaslui', ['Urziceni', 'Iasi']);

const origem = 'Arad';
const destino = 'Bucharest';
const limiteProfundidade = 3;

const encontrouDestino = dls(grafo, origem, destino, limiteProfundidade);

if (!encontrouDestino) {
    console.log("O destino não foi alcançado: " + destino);
}