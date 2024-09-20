document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Capture form data and create an object
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        hobby: document.getElementById("hobby").value
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(userData, null, 2); // Pretty print the JSON

    // Display the JSON in the HTML
    document.getElementById("jsonOutput").textContent = jsonString;
});
