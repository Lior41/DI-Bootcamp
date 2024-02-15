document.addEventListener('DOMContentLoaded', function () {
    const registerBtn = document.getElementById('register-btn');
    const inputs = document.querySelectorAll('#register-form input[required]');

    function validateInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) allFilled = false;
        });
        registerBtn.disabled = !allFilled;
    }

    inputs.forEach(input => input.addEventListener('input', validateInputs));
});
