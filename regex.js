$(function () {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const postalInput = document.getElementById('postal');
    const idInput = document.getElementById('id');
    const passwordInput = document.getElementById('password');
    const nikInput = document.getElementById('nik'); // Menambahkan elemen untuk NIK

    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const postalError = document.getElementById('postal-error');
    const idError = document.getElementById('id-error');
    const passwordError = document.getElementById('password-error');
    const nikError = document.getElementById('nik-error'); // Menambahkan elemen untuk NIK

    // Fungsi untuk memeriksa apakah sebuah string adalah email yang valid
    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    // Regular expression untuk memeriksa apakah input telepon valid
    const phonePattern = /^(?:\+?62|0)(?:\d{2,3})?\d{8,15}$/;

    // Regular expression untuk memeriksa apakah input postal code Indonesia valid
    const postalPattern = /^[A-Za-z]?\d{5}(?:-\d{4})?$/;

    // Regular expression untuk memeriksa apakah input ID valid
    const idPattern = /^\d{16}$/;

    // Regular expression untuk memeriksa apakah input password valid
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    // Regular expression untuk memeriksa apakah input NIK valid
    const nikPattern = /^\d{16}$/; // NIK Indonesia umumnya terdiri dari 16 digit angka

    emailInput.addEventListener('input', function() {
        if (emailInput.value === '') {
            emailError.textContent = '';
        }
    });

    emailInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Invalid email format';
            } else {
                emailError.textContent = '';
            }
        }
    });

    phoneInput.addEventListener('input', function() {
        if (phoneInput.value === '') {
            phoneError.textContent = '';
        }
    });

    phoneInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (!phonePattern.test(phoneInput.value)) {
                phoneError.textContent = 'Invalid phone number. Enter at least 12 digits';
            } else {
                phoneError.textContent = '';
            }
        }
    });

    postalInput.addEventListener('input', function() {
        if (postalInput.value === '') {
            postalError.textContent = '';
        }
    });

    postalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (!postalPattern.test(postalInput.value)) {
                postalError.textContent = 'Invalid postal code';
            } else {
                postalError.textContent = '';
            }
        }
    });

    idInput.addEventListener('input', function() {
        if (idInput.value === '') {
            idError.textContent = '';
        }
    });

    idInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (!idPattern.test(idInput.value)) {
                idError.textContent = 'Invalid ID number';
            } else {
                idError.textContent = '';
            }
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value === '') {
            passwordError.textContent = '';
        }
    });

    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (!passwordPattern.test(passwordInput.value)) {
                passwordError.textContent = 'Invalid password';
            } else {
                passwordError.textContent = '';
            }
        }
    });

    nikInput.addEventListener('input', function() {
        if (nikInput.value === '') {
            nikError.textContent = '';
        }
    });

    nikInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (!nikPattern.test(nikInput.value)) {
                nikError.textContent = 'Invalid ID number';
            } else {
                nikError.textContent = '';
            }
        }
    });
});
