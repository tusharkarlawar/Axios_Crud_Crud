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
    axios.post("https://crudcrud.com/api/29a9226259c14f63a1bb4cf8dd68e5ba/appointmentData", obj)
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