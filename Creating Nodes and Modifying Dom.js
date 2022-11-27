// Traversing the DOM
var itemList = document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode.parentNode)

// parenElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement)
// console.log(itemList.parentElement.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

//FirstChild
// console.log(itemList.firstChild)

// firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'

//lastChild
// console.log(itemList.lastChild)

// lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'

// nextSibling
// console.log(itemList.nextSibling)

// nextElementSibling
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling)

// previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'

//createELement

//create a div
// var newDiv = document.createElement('div')
// //Add Class
// newDiv.className = 'hello'

// //Add id
// newDiv.id = 'hello1'

// //Add attr
// newDiv.setAttribute('ttile','Hello Div')

// //Create text node
// var newDivText = document.createTextNode('Hello World')

// //Add text to div
// newDiv.appendChild(newDivText)

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)

// newDiv.style.fontSize = '30px'

// container.insertBefore(newDiv,h1)

//add HEllo word before Item 1

var newList = document.createElement('li');
newList.className = 'list-group-item';

var newListText = document.createTextNode('Hello World')
newList.appendChild(newListText);

//console.log(newList);

var items = document.querySelector('.container ul');
var li = document.querySelector('.container ul li');

//console.log(items);
//console.log(li);

items.insertBefore(newList,li);
console.log(newList);