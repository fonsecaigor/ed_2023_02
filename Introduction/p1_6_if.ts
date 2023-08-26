/*import * as promptSync from 'prompt-sync'

const prompt = promptSync();

const word1 = prompt('Digite a primeira palavra: ');
const word2 = prompt('Digite a segunda palavra: ');

const name = word1.localeCompare(word2);

if (name < 0) {
  console.log(`${word1} aparece antes de ${word2} no dicionário.`);
} else if (name > 0) {
  console.log(`${word2} aparece antes de ${word1} no dicionário.`);
} else {
  console.log('As palavras são iguais.');
}*/

import promptSync from 'prompt-sync';

const prompt = promptSync();

const word1 = prompt('Digite a primeira palavra: ');
const word2 = prompt('Digite a segunda palavra: ');

if (word1 < word2) {
  console.log(`${word1} aparece antes de ${word2} no dicionário.`);
} else if (word1 > word2) {
  console.log(`${word2} aparece antes de ${word1} no dicionário.`);
} else {
  console.log('As palavras são iguais.');
}

/*Início
  
  Solicitar ao usuário que digite a primeira palavra e armazenar em word1
  Solicitar ao usuário que digite a segunda palavra e armazenar em word2

  Se word1 for menor que word2
    Exibir "word1 aparece antes de word2 no dicionário."
  Senão, se word1 for maior que word2
    Exibir "word2 aparece antes de word1 no dicionário."
  Senão
    Exibir "As palavras são iguais."

Fim*/