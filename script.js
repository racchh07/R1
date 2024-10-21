document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission for validation testing
  
      let isValid = true;
  
      // Validation Functions
      const validateInput = (input, message) => {
        const errorMessage = input.nextElementSibling;
        if (!input.value.trim()) {
          errorMessage.textContent = message;
          errorMessage.style.display = 'block';
          isValid = false;
        } else {
          errorMessage.style.display = 'none';
        }
      };
  
      // Check each field
      validateInput(document.getElementById('firstName'), 'First name is required');
      validateInput(document.getElementById('lastName'), 'Last name is required');
      validateInput(document.getElementById('email'), 'Email is required');
      validateInput(document.getElementById('password'), 'Password is required');
      validateInput(document.getElementById('confirmPassword'), 'Confirm your password');
  
      // Check if passwords match
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      if (password !== confirmPassword) {
        const errorMessage = document.getElementById('confirmPassword').nextElementSibling;
        errorMessage.textContent = 'Passwords do not match';
        errorMessage.style.display = 'block';
        isValid = false;
      }
  
      // If all fields are valid, proceed with form submission
      if (isValid) {
        form.submit();
      }
    });
  });
  