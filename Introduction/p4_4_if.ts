import * as fs from 'fs';

class Pilha<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  estaVazia(): boolean {
    return this.items.length === 0;
  }

  empilhar(item: T): void {
    this.items.push(item);
  }

  desempilhar(): T | undefined {
    if (!this.estaVazia()) {
      return this.items.pop();
    } else {
      return undefined;
    }
  }

  topo(): T | undefined {
    const tamanho = this.items.length;
    if (tamanho > 0) {
      return this.items[tamanho - 1];
    } else {
      return undefined;
    }
  }
}
function inverterOrdem(palavras: string[]): string[] {
    const pilha = new Pilha<string>();
    for (const palavra of palavras) {
      pilha.empilhar(palavra);
    }
  
    const palavrasInvertidas: string[] = [];
    while (!pilha.estaVazia()) {
      const palavra = pilha.desempilhar();
      if (palavra !== undefined) {
        palavrasInvertidas.push(palavra);
      }
    }
  
    return palavrasInvertidas;
  }
  
  function processarArquivo(entrada: string, saida: string): void {
    try {
      const conteudo = fs.readFileSync(entrada, 'utf-8');
      const palavras = conteudo.split(/\s+/);
      const palavrasInvertidas = inverterOrdem(palavras);
  
      const resultado = palavrasInvertidas.join(' ');
      fs.writeFileSync(saida, resultado);
  
      console.log(`Resultado salvo em ${saida}`);
    } catch (error) {
      console.error(`Ocorreu um erro: ${error}`);
    }
  }
  
  const arquivoEntrada = 'entrada.txt';
  const arquivoSaida = arquivoEntrada.replace('entrada.txt', 'entrada_out.txt');
  
  processarArquivo(arquivoEntrada, arquivoSaida);