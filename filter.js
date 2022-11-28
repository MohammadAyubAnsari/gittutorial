var form = document.getElementById('addForm')
    var itemList = document.getElementById('items')
    var filter = document.getElementById('filter')


//Form submit event
form.addEventListener('submit',addItem)
//Delete event
itemList.addEventListener('click',removeItem)
//Filter event
filter.addEventListener('keyup',filterItems)


//Add item
function addItem(e){
    e.preventDefault()

    //Get input value
    var newItem = document.getElementById('item').value 
    var description = document.getElementById('description').value  
    // //Delete event

    //Create new li element
    var li = document.createElement('li')
    //Add Class 
    li.className = 'list-group-item'

     // console.log(li)
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode( " " +description))
    
    
    // //Create edit button element
    // var editBtn = document.createElement('button')
    // //Add classes to edit button
    // editBtn.className = 'btn float-right edit'
    // //Append text node
    // editBtn.appendChild(document.createTextNode('Edit'))
    // //Add button to li
    // li.appendChild(editBtn)
    // //Append li to list
    // itemList.appendChild(li)

    //Create del button element
    var deleteBtn = document.createElement('button')
    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //Add button to li
    li.appendChild(deleteBtn)
    //Append li to list
    itemList.appendChild(li)


}
//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

//Filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase()
    // console.log(text)
    //Get list
    var items = itemList.getElementsByTagName('li')
    // console.log(items)
    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent 
        var description = item.childNodes[1].textContent
        // console.log(itemName)
        if (itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display  = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}  