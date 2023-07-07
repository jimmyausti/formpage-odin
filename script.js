console.log('hello world!');

//confirm password
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

//toggle theme

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

document.querySelector('#toggle-theme').addEventListener('click', setTheme);
