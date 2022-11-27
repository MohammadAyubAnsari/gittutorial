// // QuerySelector
// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input')
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral'

// QuerySelectorALL
// var titles = document.querySelectorAll('.title')
// console.log(titles)

// titles[0].textContent = 'Hello'
// titles[0].style.visibility = 'hidden'

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for(var i=0 ; i<odd.length ; i++){
//     odd[i].style.backgroundColor = 'green'
//     even[i].style.backgroundColor = 'red'
// }

// Make the 2nd item have green background color
// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor = 'green'

// // Make the 3rd item invisible
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility = 'hidden'

// // 1.Using QuerySelectorALL change the font color to green for 2nd item in the item list
// var item = document.querySelectorAll('.list-group-item')
// item[1].style.color =  'green'


// // 2.Choose all the odd elements and make their background green using QuerySelectorALL
var odd = document.querySelectorAll('li:nth-child(odd)')
for(var i=0 ; i<odd.length ; i++){
        odd[i].style.backgroundColor = 'green'
    }