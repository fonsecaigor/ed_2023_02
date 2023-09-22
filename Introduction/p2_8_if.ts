class MyArray {
    private elements: number[];

    const(elements: number[]) {
        this.elements = elements;
    }

    imprimirRecursivo(i: number = 0): void {
        // Verifica se o índice está dentro dos limites do array
        if (i < this.elements.length) {
            // Imprime o elemento atual
            console.log(this.elements[i]);
            // Chama recursivamente a função para o próximo elemento
            this.imprimirRecursivo(i + 1);
        }
    }

    imprimirReverso(i: number = this.elements.length - 1): number[] {
        // Verifica se o índice está dentro dos limites do array
        if (i >= 0) {
            // Retorna o elemento atual e chama recursivamente para o elemento anterior
            return [this.elements[i], ...this.imprimirReverso(i - 1)];
        } else {
            // Quando o índice se torna negativo, todos os elementos foram processados
            return [];
        }
    }
}

// Exemplo de uso da classe MyArray
const myArray = new MyArray();

console.log("Elementos do array:");
myArray.imprimirRecursivo();

console.log("Elementos do array em ordem reversa:");
const elementosRevertidos = myArray.imprimirReverso();
console.log(elementosRevertidos);

