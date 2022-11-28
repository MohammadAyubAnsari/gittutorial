function saveToLocalStorage(event){
    event.preventDefault()
    const name =event.target.username.value
    const email = event.target.emailId.value
    const phonenumber = event.target.phonenumber.value

    // localStorage.setItem('name',name)
    // localStorage.setItem('email',email)
    // localStorage.setItem('phonenumber',phonenumber)

    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    // const obj1 = JSON.parse(localStorage.getItem(obj.email))
    // console.log(obj1.name)
    showNewUserOnScreen(obj)

}
function showNewUserOnScreen(user){
    const parentNode=document.getElementById('listOfUsers')
    const childHTML = `<li> ${user.name}  -  ${user.email}  -  ${user.phonenumber}</li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML
}