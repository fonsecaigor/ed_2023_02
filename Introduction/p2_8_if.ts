class MyArray {
  private elements: number[];

  constructor(elements: number[]) {
    this.elements = elements;
  }

  imprimirRecursivo(i: number): void {
    // Verifica se o índice está dentro dos limites do array
    if (i < this.elements.length) {
      // Imprime o elemento atual
      console.log(this.elements[i]);
      // Chama recursivamente a função para o próximo elemento
      this.imprimirRecursivo(i + 1);
    }
  }

  imprimirReverso(i: number = this.elements.length - 1): void {
    // Verifica se o índice está dentro dos limites do array
    if (i >= 0) {
      // Retorna o elemento atual e chama recursivamente para o elemento anterior
      console.log(this.elements[i]);
      this.imprimirReverso(i - 1);
      // Quando o índice se torna negativo, todos os elementos foram processados
    }
  }
}

// Exemplo de uso da classe MyArray com um array de números
const elementos = [1, 2, 3, 4, 5];
const myArray = new MyArray(elementos);

console.log("Elementos do array:");
myArray.imprimirRecursivo(0);

console.log("Elementos do array em ordem reversa:");
myArray.imprimirReverso();
