

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



function test(){
    console.log('test');
}

const t = test;

const paragrafo = $('p');

paragrafo.classList.add('red');

console.log(paragrafo);

const nuovoParagrafo = document.createElement('p');
const testo = document.createTextNode('Chigga');
nuovoParagrafo.appendChild(testo);

nuovoParagrafo.textContent = 'Migga con textContent';

nuovoParagrafo.innerHTML = '<strong>Jigga</strong>';

const paragrafi = $$('p');
console.log(paragrafi);
