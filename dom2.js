// GetElementByClassName
var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

items[2].style.backgroundColor = 'green'



// items.style.backgroundColor = '#f4f4f4' //will not work because it is a HTML collection or array

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
}