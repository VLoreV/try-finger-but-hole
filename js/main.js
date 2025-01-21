const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const paragrafo = document.querySelector('p');

paragrafo.classList.add('red');

console.log(paragrafo);

const paragrafi = document.querySelectorAll('p');
console.log(paragrafi);