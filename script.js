console.log('hello world!');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

document.querySelector('form').addEventListener('submit', function(e) {

    e.preventDefault();
    
    if (password.value !== confirmPassword.value) {
        alert('Your passwords do not match.');
    }
    else {

        this.submit();
    }


});

