console.dir(document)

var h = document.getElementById('container');
h.textContent = "Hello";
h.innerHTML = '<h1>vsvwef</h1>'
h.innerText = 'Hello'
h.style.borderBottom = 'solid 3px #000';
console.log(h);

var h = document.getElementsByClassName('form');
h.style.backgroundColor = 'yellow';

var header = document.querySelector('#main-header');
header.value = "Hello";

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.color = 'blue';

var lastitem = document.querySelector('.list-group-item:nth-child(2)');
lastitem.color = 'yellow';

var odd = document.querySelector('.list-group-item:nth-child(odd)');

var itemlist = document.querySelector('#items');
console.log(itemlist.parentNode);
console.log(itemlist.childNodes);
console.log(itemlist.children[1]);
console.log(itemlist.nextSibling);


var newDiv = document.createElement('div');
newDiv.className = 'hello'; //add class
newDiv.id = 'hello1'; //add id
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello World');    //create text node
newDiv.appendChild(newDivText); //add text to div
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

console.log(newDiv)







