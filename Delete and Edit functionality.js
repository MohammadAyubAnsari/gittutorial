var form = document.getElementById('addForm')
    var itemList = document.getElementById('items')
    var button = document.getElementsByTagName('button');
    console.log(button);


//Form submit event
form.addEventListener('submit',addItem)
//Delete event
itemList.addEventListener('click',removeItem)

//Add item
function addItem(e){
    e.preventDefault()

    //Get input value
    var newItem = document.getElementById('item').value   
    // //Delete event

    //Create new li element
    var li = document.createElement('li')
    //Add Class 
    li.className = 'list-group-item'
    // console.log(li)
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //Create edit button element
    var editBtn = document.createElement('button')
    //Add classes to edit button
    editBtn.className = 'btn float-right edit'
    //Append text node
    editBtn.appendChild(document.createTextNode('Edit'))
    //Add button to li
    li.appendChild(editBtn)
    //Append li to list
    itemList.appendChild(li)

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