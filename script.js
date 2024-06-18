// Validation for sign-up form
document.getElementById("signUpForm").addEventListener("submit", function(event) {
    var username = document.getElementById("signUpUsername").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPassword").value;

    // Basic email validation
    if (!isValidEmail(email)) {
        document.getElementById("signUpError").innerText = "Invalid email address";
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Basic password validation
    if (password.length < 6) {
        document.getElementById("signUpError").innerText = "Password must be at least 6 characters long";
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // If both email and password are valid, allow form submission
    return true;
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle sign-in logic here
});

document.getElementById('googleSignIn').addEventListener('click', function() {
    // Redirect to Google's OAuth sign-in page
    window.location.href = 'https://accounts.google.com/signin';
});

document.getElementById('appleSignIn').addEventListener('click', function() {
    // Redirect to Apple's OAuth sign-in page
    window.location.href = 'https://appleid.apple.com/auth/authorize';
});

document.getElementById('microsoftSignIn').addEventListener('click', function() {
    // Redirect to Microsoft's OAuth sign-in page
    window.location.href = 'https://login.microsoftonline.com/';
});

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
document.getElementById('googleSignUp').addEventListener('click', function() {
    // Add your Google sign up logic here
    alert('Google sign up not yet implemented.');
});

document.getElementById('appleSignUp').addEventListener('click', function() {
    // Add your Apple sign up logic here
    alert('Apple sign up not yet implemented.');
});

document.getElementById('microsoftSignUp').addEventListener('click', function() {
    // Add your Microsoft sign up logic here
    alert('Microsoft sign up not yet implemented.');
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted.');
});
