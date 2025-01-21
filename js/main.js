

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



function test() {
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

const mioTesto = 'sasa lele'


const myDom = {
    type: "div",
    id: "container",
    className: "container",
    children: [
        {
            type: "h1",
            children: [{ type: "text", value: "My DOM Framework" }],
        },
        {
            type: "p",
            children: [
                {
                    type: "text",
                    children: [
                        { type: "text", value: "This is a" },
                        {
                            type: "span",
                            className: "bold",
                            children: [{ type: "text", value: " DOM Framework" }],
                        },
                    ],
                },
            ],
        },
    ],
};

function render(dom, parent) {
    const el = document.createElement(dom.type);
    if (dom.id) el.id = dom.id;
    if (dom.className) el.className = dom.className;
    if (!dom.children) return parent.appendChild(el);
    dom.children.forEach((child) => {
        if (child.type === "text" && child.value) {
            el.appendChild(document.createTextNode(child.value));
        } else {
            render(child, el);
        }
    });
    parent.appendChild(el);
}

const rootElement = document.getElementById("root");
render(myDom, rootElement);

const parent = $('header');
parent.appendChild(nuovoParagrafo);
const paragrafi = $$('p');
console.log(paragrafi);