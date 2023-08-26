"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var word1 = prompt('Digite a primeira palavra: ');
var word2 = prompt('Digite a segunda palavra: ');
var name = word1.localeCompare(word2);
if (name < 0) {
    console.log("".concat(word1, " aparece antes de ").concat(word2, " no dicion\u00E1rio."));
}
else if (name > 0) {
    console.log("".concat(word2, " aparece antes de ").concat(word1, " no dicion\u00E1rio."));
}
else {
    console.log('As palavras são iguais.');
}
