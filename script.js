// js/script.js

// 1. Create a greeting function that runs on page load based on time of day.
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";
    const greetingElement = document.getElementById('greeting');

    if (!greetingElement) return;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    greetingElement.textContent = greeting;
}

window.onload = displayGreeting;

// 2. Handle form validation using regex for the contact form (e.g., email, phone number).
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

// 3. Toggle a dark/light mode theme using JavaScript and CSS interaction.
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// 4. Manipulate page content dynamically (e.g., show/hide project details).
// 5. Access and update elements using the DOM.
// 6. Use event listeners for mouse clicks or input focus.
const portfolioSection = document.getElementById('portfolio');

if (portfolioSection) {
    portfolioSection.addEventListener('click', function(event) {
        if (event.target.classList.contains('details-btn')) {
            const projectId = event.target.dataset.project;
            const detailsElement = document.getElementById(projectId);

            if (detailsElement) {
                detailsElement.style.display = detailsElement.style.display === 'block' ? 'none' : 'block';
            }
        }
    });
}

// Example: Adding focus styling to form inputs for better accessibility
const formInputs = document.querySelectorAll('input, textarea, select');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#007bff';
        input.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = '#ccc';
        input.style.boxShadow = 'none';
    });
});

// Example: Basic form submission feedback (replace with actual server-side handling)
const surveyForm = document.getElementById('survey-form');
const surveyStatus = document.getElementById('survey-status');

if (surveyForm) {
    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(surveyForm);
        console.log('Survey Form Data:', [...formData.entries()]);

        surveyStatus.textContent = 'Thank you for your feedback!';
        surveyStatus.className = 'status-message success';
        surveyForm.reset();
    });
}