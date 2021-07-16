var selectedFirst = null
var selectedSecond = null

// Functions to discover selected numbers in lists
function selectedListFirst(element) {
    let listFirst = document.getElementById("listFirst")
    selectedFirst = listFirst.options[listFirst.selectedIndex] 
}

function selectedListSecond(element) {
    let listSecond = document.getElementById("listSecond")
    selectedSecond = listSecond.options[listSecond.selectedIndex] 
}


// Function for adding elements to lists
function addList(id) {

    // Get a number value
    let inputNumber = document.getElementById("inputNumber")
    let number = Number(inputNumber.value)

    if (id == "btnFirst") {
        // Add number to secound list
        let selector = document.getElementById("listFirst")

        let valuesList = document.getElementsByTagName("valueFirst")

        // Add number on List
        let option = document.createElement("option")
        option.text = number

        selector.appendChild(option)

    } else {
        // Add number to secound list
        let selector = document.getElementById("listSecond")

        let valuesList = document.getElementsByTagName("valueSecond")

        // Add number on List
        let option = document.createElement("option")
        option.text = number

        selector.appendChild(option)
    }
}


// Functions to remove selected elements from lists
function removeListFirst() {
    if (selectedFirst != null) {
        let selector = document.getElementById("listFirst")
        selector.removeChild(selectedFirst)

        selectedFirst = null
    } else {
        alert("Select an iten to remove")
    }
}

function removeListSecond() {
    if (selectedSecond != null) {
        let selector = document.getElementById("listSecond")
        selector.removeChild(selectedSecond)

        selectedSecond = null
    } else {
        alert("Select an iten to remove")
    }
}