/* 
   W3Schools. (2024). JavaScript Form Validation. 
   Retrieved from https://www.w3schools.com/js/js_validation.asp
*/

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('bookingForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            event.preventDefault();

            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            
            if (name.length < 2) {
                alert("Please enter a valid name (at least 2 characters).");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (message.length < 10) {
                alert("Please tell us a bit more about your inquiry (min 10 characters).");
                return;
            }

           
            alert(`Thank you, ${name}! Your inquiry regarding Al Bahr has been sent successfully.`);
            
            
            contactForm.reset();
        });
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}