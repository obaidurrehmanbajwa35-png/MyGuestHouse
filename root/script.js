/* Adapted from: W3Schools (2024). JS Form Validation. */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('bookingForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            
            if (name.length < 2) {
                alert("Please enter a valid name.");
                return;
            }

          
            alert(`Thank you, ${name}! Your inquiry about Al Bahr has been received.`);
            contactForm.reset();
        });
    }
});