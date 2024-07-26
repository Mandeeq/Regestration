function submitForm(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Phone:', phone);
    console.log('Email:', email);

    window.location.replace("http://localhost/demos/IMAN/Regestration/kevoh/index.html");

}
function Login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById("password").value;
    console.log("username");

    if (username === "" || password === "") {
        alert("username or password cannot be blank");
    } else {

        if (password === "admin" && username === "admin") {
            alert("succefully logged in");
            //redirct to homepage in this case im redirecting to a diffrent website just replace the url in 
            window.location.replace("http://www.w3schools.com");
        } else {
            alert("wrong pasword or email");
        }
    }
}



