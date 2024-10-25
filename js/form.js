    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const form = document.getElementById('form');
    const name_error = document.getElementById('name_error');

    form.addEventListener('submit', (e) => {
        
        if (name.value === '' || name.value == null) {
            e.preventDefault(); // Prevent form from submitting
            name_error.innerHTML = "Name is required";
            
        }
    });
