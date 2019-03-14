var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInput.value;
        console.log('username', username);
        console.log('password', password);
        if (username === 'richie' && password === 'abc123') {
            this.goToHome();
            {
                this.displayError();
            }
        }
    };
    return Login;
}());
displayError();
{
    var errorBox = document.getElementById('error-box');
    errorBox.innerHTML = "User not found!";
    console.log('errorBox.innerHtml', errorBox.html);
    errorBox.style = "display: block";
    var inerval = setInterval;
}
goToHome();
{
    window.location.href = 'index.html';
}
var login = new Login();
