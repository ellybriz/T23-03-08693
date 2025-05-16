#   CP 221 Practical Assignment One - Personal Portfolio Website - [Mwita Juma] - [T23-03-08693]

##   Tools Used

* **Code Editor:** VS Code 
* **Languages:** HTML5, CSS3, JavaScript
* **Validation:** W3C HTML Validator, W3C CSS Validator
* **Browser:** Chrome (and/or other browsers used for testing, e.g., Firefox, Safari)
* **Other:** Regular Expressions (for form validation)

##   Key Features Implemented

* **Website Structure and Navigation:**
    * Multi-page website with the following sections:
        * Homepage
        * About Me
        * Portfolio/Projects
        * Contact Form
        * Survey Page
    * Consistent navigation across all pages using a horizontal navigation bar.
* **Homepage:**
    * Dynamic greeting message (Good morning, Good afternoon, Good evening) implemented using JavaScript.
    * Profile image and introductory text.
    * Image map.
    * Embedded iframe.
* **About Me:**
    * Two-column layout with a biography section and an image.
    * Nested lists to display skills.
    * Downloadable resume link.
* **Portfolio/Projects:**
    * Three-column layout to showcase projects.
    * Clickable elements to show/hide project details dynamically using JavaScript.
* **Contact Form:**
    * Form with fields for name, email, phone (optional), and message.
    * Client-side form validation using JavaScript and regular expressions:
        * Required fields validation.
        * Email format validation.
        * Phone number format validation.
    * Submission handling (simulated with a success message).
* **Survey Page:**
    * Form with radio buttons, checkboxes, a dropdown select, and a textarea for feedback.
    * Basic form submission handling.
* **Dynamic Content:**
    * JavaScript used to dynamically update content, including:
        * Greeting message on the homepage.
        * Project details on the portfolio page.
* **Responsive Design:**
    * Website adapts to different screen sizes (desktop and mobile) using:
        * `<meta viewport>` tag.
        * CSS Flexbox and Grid layouts.
        * Media queries.
* **Dark/Light Mode:**
    * JavaScript-enabled theme toggle functionality.
    * User's theme preference is saved in local storage.
* **Accessibility:**
    * Semantic HTML5 elements.
    * Descriptive `alt` attributes for images.
    * Proper use of `<label>` elements for form inputs.
    * Keyboard navigation improvements (focus styles).
* **HTML Structure**
    * Correct use of semantic HTML5 tags  (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`).
    * Correct DOCTYPE declaration.
    * Appropriate use of block-level and inline-level elements.
* **CSS Styling**
     * External CSS for global styles.
     * Element, class, ID, and pseudo-class selectors.
     * Font styling, text styling, and list styling.
     * Box model for element structure.
     * Background styling.
     * Table styling.
     * Horizontal and vertical navigation bars.
     * Print-friendly CSS for resume section.
     * Positioning (relative, absolute, fixed) and z-index.

##   Challenges Faced and How They Were Solved

* **Form Validation Regex:**
    * **Challenge:** Creating robust regular expressions for email and phone number validation that cover various user input formats.
    * **Solution:** Used a combination of online resources and testing to refine the regular expressions.  For the phone number, I implemented a 10-digit validation.
* **Dynamic Content Updates:**
    * **Challenge:** Efficiently updating content in multiple sections of the website (homepage, portfolio) with JavaScript.
    * **Solution:** Created a JavaScript object (`dynamicContent`) to store all the dynamic data and a function (`updateContent()`) to update the relevant HTML elements based on the current page.
* **Layout Responsiveness:**
    * **Challenge:** Ensuring the website layout remained consistent and user-friendly across different screen sizes, especially the portfolio grid and the two-column layout in the About Me section.
    * **Solution:** Used a combination of Flexbox and CSS Grid, along with media queries, to create flexible and responsive layouts. Tested thoroughly on different devices and browser sizes.
* **Cross-Browser Compatibility:**
     * **Challenge:** Ensuring the website renders correctly and functions consistently across different web browsers (Chrome, Firefox, Safari, etc.).
     * **Solution:** Tested the website on multiple browsers and used CSS resets and best practices to minimize browser-specific styling issues.
* **Accessibility:**
    * **Challenge:** Making the website accessible to users with disabilities, including those using screen readers and keyboard navigation.
    * **Solution:**
        * Ensured all images have descriptive `alt` attributes.
        * Used `<label>` elements correctly associated with form inputs.
        * Implemented focus styles for form inputs.
        * Used semantic HTML5 elements.
