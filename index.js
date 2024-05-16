document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Sanitize inputs
    name = sanitizeInput(name);
    email = sanitizeInput(email);
    message = sanitizeInput(message);

    let isValid = true;

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById("email").classList.add("border-b-error");
        document.getElementById("emailError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("email").classList.remove("border-b-error");
        document.getElementById("emailError").classList.add("hidden");
    }

    // Name validation
    if (!validateName(name)) {
        document.getElementById("name").classList.add("border-b-error");
        document.getElementById("nameError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("name").classList.remove("border-b-error");
        document.getElementById("nameError").classList.add("hidden");
    }

    // If either validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});

document.getElementById("email").addEventListener("input", function() {
    document.getElementById("email").classList.remove("border-b-error");
    document.getElementById("emailError").classList.add("hidden");
});

document.getElementById("name").addEventListener("input", function() {
    document.getElementById("name").classList.remove("border-b-error");
    document.getElementById("nameError").classList.add("hidden");
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateName(name) {
    const re = /^[a-zA-Z\s]+$/; // Only allows letters and spaces
    return re.test(name);
}

function sanitizeInput(input) {
    return input.replace(/[&<>"'\/]/g, function (s) {
        return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;'
        })[s];
    });
}
