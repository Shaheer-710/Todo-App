var form = document.getElementsByClassName("new-form")[0]
var input = document.getElementsByClassName("first-input-field")[0]
var list_el = document.getElementById("tasks")
var submitButton = document.getElementsByClassName("new-task-sumbit")[0];


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
});

sumbit();

function sumbit() {
    var task = input.value.trim();

    // Prevent empty task creation

    if (input.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Atempt Fail...",
            text: "Please fill the input field!",
        });
        return false;
    }

    // Create task element structure

    var divElement = document.createElement("div")
    divElement.classList.add("task")

    var divElement2 = document.createElement("div")
    divElement.classList.add("content")


    divElement.appendChild(divElement2)

    var inputElement = document.createElement("input")
    inputElement.classList.add("text")
    inputElement.type = "text"
    inputElement.value = task;
    inputElement.setAttribute('readonly', 'readonly')

    divElement.appendChild(inputElement)

    var actionbtn = document.createElement("div")
    actionbtn.classList.add("actions")

    // Edit Element
    var editBtn = document.createElement("button")
    editBtn.classList.add("edit")
    editBtn.innerHTML = "Edit"
    //Edit Element End

    // Delete Element
    var DeleteBtn = document.createElement("button")
    DeleteBtn.classList.add("delete")
    DeleteBtn.innerHTML = "Delete"
    // Delete Element End

    actionbtn.appendChild(DeleteBtn)
    actionbtn.appendChild(editBtn)
    divElement.appendChild(actionbtn)
    list_el.appendChild(divElement)

    // FUNCTION THE EDIT ELEMENT
    editBtn.addEventListener('click', () => {
        if (editBtn.innerHTML.toLocaleLowerCase() === "edit") {
            inputElement.removeAttribute('Readonly')
            inputElement.focus()
            editBtn.innerHTML = 'Save'
        } else {
            inputElement.setAttribute('readonly', 'readonly')
            editBtn.innerHTML = 'Edit'
        }
    })

    // Function The Delete Element
    DeleteBtn.addEventListener('click', () => {
        list_el.removeChild(divElement)
    })






    input.value = ""

    return true;


}

try {
    
} catch (error) {
    console
}
