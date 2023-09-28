class MyArray {
    private elements: number[];

    constructor(elements: number[]) {
        this.elements = elements;
    }

    imprimirRecursivo(i: number = 0): void {
        if (i < this.elements.length) {
            console.log(this.elements[i]);
            this.imprimirRecursivo(i + 1);
        }
    }

    imprimirReverso(i: number = this.elements.length - 1): void {
        if (i >= 0) {
            console.log(this.elements[i]);
            this.imprimirReverso(i - 1);
        }
    }
}

const elementos = [1, 2, 3, 4, 5];
const myArray = new MyArray(elementos);

console.log("Elementos do array:");
myArray.imprimirRecursivo();

console.log("Elementos do array em ordem reversa:");
myArray.imprimirReverso();
