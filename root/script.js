/* W3Schools. (2024). JS Form Validation. Retrieved from https://www.w3schools.com/js/js_validation.asp 
*/

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    if (name.length < 2) {
        alert("Please enter a valid name.");
        return false;
    }
    alert("Thank you, " + name + "! Your inquiry has been sent.");
    document.getElementById("bookingForm").reset();
    return true;
}