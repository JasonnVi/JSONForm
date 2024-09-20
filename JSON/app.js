document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

   
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        hobby: document.getElementById("hobby").value
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(userData, null, 2);

   
    document.getElementById("jsonOutput").textContent = jsonString;
});
