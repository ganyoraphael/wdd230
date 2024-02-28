
// JavaScript to ensure password and confirm password match
document.getElementById('main-form').onsubmit = function() {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    
    if (password != confirm_password) {
        alert("Passwords do not match.");
        document.getElementById('password').value = '';
        document.getElementById('confirm_password').value = '';
        document.getElementById('password').focus();
        return false;
    }
    return true;
};