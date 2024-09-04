document.addEventListener('DOMContentLoaded', function() {
    const locationDropdown = document.getElementById('location-dropdown');
    const locationBarContainer = document.getElementById('locationBar-container');

    locationDropdown.addEventListener('change', function() {
        const selectedValue = locationDropdown.value;

        if (selectedValue === 'current') {
            locationBarContainer.innerHTML = 'You have selected your current location.';
        } else if (selectedValue === 'specific') {
            locationBarContainer.innerHTML = 'Please enter your specific location.';
        } else {
            locationBarContainer.innerHTML = '';
        }
    });

    // Login Modal functionality
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModal = document.getElementById('close-modal');

    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'flex';
    });

    closeLoginModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Sign Up Modal functionality
    const signupBtn = document.getElementById('signup-btn');
    const signupModal = document.getElementById('signup-modal');
    const closeSignupModal = document.getElementById('close-signup-modal');

    signupBtn.addEventListener('click', function() {
        signupModal.style.display = 'flex';
    });

    closeSignupModal.addEventListener('click', function() {
        signupModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });
});
