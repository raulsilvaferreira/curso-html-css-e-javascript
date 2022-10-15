function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassorword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassorword.type = 'text';
    }

    else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassorword.type = 'password';
    }
}

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Logado!')
})