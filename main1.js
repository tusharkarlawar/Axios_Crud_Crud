function submitdetails(event){ 
    event.preventDefault() 
    const expenses = event.target.expenses.value 
    const description = event.target.description.value 
    const catalogue = event.target.catalogue.value 
 
    const obj = { 
        expenses, 
        description, 
        catalogue 
    }

    //Saving the user Details on Crud Crud...POST//
    axios.post("https://crudcrud.com/api/ced3f1bdbe534b61a9ecaa8fc2e6cce4/appointmentData", obj)
    .then((response)=> {
        showuseronscreen (response.data)
        console.log(response)
    })
    .catch((err)=> {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong"
        console.log(err)
    })  
    


    
 
    // localStorage.setItem(obj.description,JSON.stringify(obj)) 
    // showuseronscreen (obj) 

} 
//Get the saved User Details from crudcrud.//
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/ced3f1bdbe534b61a9ecaa8fc2e6cce4/appointmentData")
    .then((response)=>{
        console.log(response)

        for(var i=0; i<response.data.length; i++){
            showuseronscreen(response.data[i])
        }
    })
    .catch((error) => {
        console.log(error)
    })
} )


//Update the user Details//
function editUserDetails(expenses,description,catalogue){
    document.getElementById('expenses').value=expenses;
    document.getElementById('description').value=description;
    document.getElementById('catalogue').value=catalogue;
}

//Deleting the Appointments//
function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/ced3f1bdbe534b61a9ecaa8fc2e6cce4/appointmentData/${userId}`)
    .then((response) => {
        removeUserFromScreen(userId)
    })
    .catch((err) =>{
        console.log(err)
    } )
}




function showuseronscreen (obj){ 
    const parentelem = document.getElementById("listofitems")
    const childelem = document.createElement("li") 
    childelem.textContent = obj.expenses + ' - ' + obj.description+' - ' + obj.catalogue 
 
    const deletebutton = document.createElement("input") 
    deletebutton.type = "button" 
    deletebutton.value = "Delete Input" 
 
    deletebutton.onclick = () => { 
        localStorage.removeItem(obj.description) 
        parentelem.removeChild(childelem) 
    } 
 
 
    const editbutton = document.createElement("input") 
    editbutton.type ="button" 
    editbutton.value = "Edit Input" 
 
    editbutton.onclick = () => { 
        localStorage.removeItem(obj.description) 
        parentelem.removeChild(childelem) 
        document.getElementById("expenses").value = obj.expenses 
        document.getElementById("description").value = obj.description 
        document.getElementById("catalogue").value = obj.catalogue 
 
    } 
    childelem.appendChild(deletebutton) 
    childelem.appendChild(editbutton) 
 
    parentelem.appendChild(childelem) 
}