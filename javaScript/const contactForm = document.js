const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        let isValid = true;
        const errors = [];

        if (nameInput.value.trim() === '') {
            errors.push('Name is required.');
            isValid = false;
        }

        if (!emailRegex.test(emailInput.value)) {
            errors.push('Please enter a valid email address.');
            isValid = false;
        }

        if (phoneInput.value.trim() !== '' && !phoneRegex.test(phoneInput.value)) {
            errors.push('Please enter a valid phone number (10 digits).');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            errors.push('Message is required.');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            formStatus.textContent = 'Form submitted successfully!';
            formStatus.classList.add('success');
            contactForm.reset();
            console.log('Form Data:', {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                message: messageInput.value
            });
        } else {
            formStatus.innerHTML = 'Please correct the following errors:<br>' + errors.join('<br>');
            formStatus.classList.add('error');
        }
    });
}