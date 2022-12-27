function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }
    axios.post("https://crudcrud.com/api/953d168ab49f45c88f32f1bb9e749bfd/appointmentData ",obj)
        .then((response) =>{
            showNewUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err) =>{
            console.log(err)
        })

    //localStorage.setItem(obj.email, JSON.stringify(obj))
    // showNewUserOnScreen(obj)
}
// function getuser(){
//     axios.get("https://crudcrud.com/api/953d168ab49f45c88f32f1bb9e749bfd/appointmentData ")
//         .then((response)=> {
//             for(let i=0;i<response.data.length;i++){
//                 showNewUserOnScreen(response.data[i])
//             }
//             console.log(response)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// }
// getuser()

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/953d168ab49f45c88f32f1bb9e749bfd/appointmentData ")
        .then((response)=> {
            for(let i=0;i<response.data.length;i++){
                showNewUserOnScreen(response.data[i])
            }
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })


    // const localStorageObj = localStorage;
    // const localstoragekeys  = Object.keys(localStorageObj)

    // for(var i =0; i< localstoragekeys.length; i++){
    //     const key = localstoragekeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showNewUserOnScreen(userDetailsObj)
    // }
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';
    // console.log(localStorage.getItem(user.emailId))
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user._id}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(email, name, phonenumber, user_id){

    document.getElementById('email').value = email;
    document.getElementById('username').value = name;
    document.getElementById('phonenumber').value =phonenumber;

    deleteUser(user_id)
 }

// deleteUser('abc@gmail.com')

function deleteUser(user_id){
    // console.log(emailId)
    // localStorage.removeItem(emailId);
    // removeUserFromScreen(emailId);
    axios.delete("https://crudcrud.com/api/953d168ab49f45c88f32f1bb9e749bfd/appointmentData/"+ user_id)
        .then((response)=> {
                removeUserFromScreen(user_id)
                console.log(response)
            }
        )
        .catch((err)=>{
            console.log(err)
        })

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}