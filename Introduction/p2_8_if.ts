class MyArray<T> {
    private elements: T[];

    constructor(elements: T[]) {
        this.elements = elements;
    }

    printRecursive(index: number = 0): void {
        // Verifica se o índice está dentro dos limites do array
        if (index < this.elements.length) {
            // Imprime o elemento atual
            console.log(this.elements[index]);
            // Chama recursivamente a função para o próximo elemento
            this.printRecursive(index + 1);
        }
    }

    reverseRecursive(index: number = this.elements.length - 1): T[] {
        // Verifica se o índice está dentro dos limites do array
        if (index >= 0) {
            // Retorna o elemento atual e chama recursivamente para o elemento anterior
            return [this.elements[index], ...this.reverseRecursive(index - 1)];
        } else {
            // Quando o índice se torna negativo, todos os elementos foram processados
            return [];
        }
    }
}

// Exemplo de uso da classe MyArray
const meuArray = new MyArray([1, 2, 3, 4, 5]);

console.log("Elementos do array:");
meuArray.printRecursive();

console.log("Elementos do array em ordem reversa:");
const elementosRevertidos = meuArray.reverseRecursive();
console.log(elementosRevertidos);

