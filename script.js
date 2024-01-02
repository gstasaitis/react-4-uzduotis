// Input variables
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var age = document.getElementById("age")

// Button variables
var add = document.getElementById("add")
var removeFirst = document.getElementById("removeFirst")
var removeLast = document.getElementById("removeLast")

// Append place
var dataPlace = document.getElementById("dataPlace")

console.log(firstName, lastName, age, add, removeFirst, removeLast, dataPlace)

// Add function
add.addEventListener("click", function(){
    if(firstName.value && lastName.value && age.value > 0) {
        
        var newRow = document.createElement("tr")
        newRow.innerHTML =
        `
        <td>${firstName.value}</td>
        <td>${lastName.value}</td>
        <td>${age.value}</td>
        `
    
        dataPlace.append(newRow)
        
        // Clear inputs
        firstName.value = "" 
        lastName.value = "" 
        age.value = ""
        
    } else if(age.value <= 0) {
        alert("Pataisykite amžių")
    } else {
        alert("Užpildykite visus langelius")
    }
 
})

// Remove functions
removeFirst.addEventListener("click", function(){
    var rows = dataPlace.querySelectorAll("tr")

    if(rows.length == false) return alert("Jau viską ištrynei") 

    rows[0].remove()
})

removeLast.addEventListener("click", function(){
    var rows = dataPlace.querySelectorAll("tr")

    if(!rows.length) return alert("Jau viską ištrynei") 

    rows[rows.length - 1].remove()
})