function validatePassword() {
    let passwordField = document.getElementById('password');
    if (passwordField.value.length < 8) {
        document.getElementById('passwordErr').innerText = "please enter at least 8 characters name";
        return false
    }

    document.getElementById('passwordErr').innerText = "";
    return true
}

function validateUsername() {
    let UsernameField = document.getElementById('username');
    if (UsernameField.value.length < 4) {
        document.getElementById('usernameErr').innerText = "please enter at least 4 characters name";
        return false
    }
    document.getElementById('usernameErr').innerText = "";
    return true
}

function validate() {
    let isUsernameOk = validateUsername();
    let isPasswordOk = validatePassword();
    return isUsernameOk && isPasswordOk;
}