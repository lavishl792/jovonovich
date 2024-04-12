// script.js
document.getElementById("nameForm").addEventListener("submit", function(event) {
    // event.preventDefault(); // Prevent the form from submitting normally
    const name = document.getElementById("name").value;
    console.log("Name entered:", name);
    // You can do further processing with the name variable here
});
// script.js
// script.js
document.getElementById("nameForm").addEventListener("submit", function(event) {
    // event.preventDefault();
    const name = document.getElementById("name").value;
    localStorage.setItem('name', name); // Store in local storage
    console.log("Name entered:", name);
    // You can do further processing with the name variable here
});

