const form = document.getElementById('form');
const inputs = document.getElementById('form').elements;
inputs['email'].addEventListener("focus", function () {
    this.style.color = "black";  
});
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        var a = inputs["firstName"].value;
        console.log(inputs["firstName"]);

        console.log(a);
        if (a == null || a == "") {
            document.getElementById('firstName_error').innerHTML = "First Name Can't be Empty"
            inputs["firstName"].style.border = "1px solid red";
        }
        var b =  inputs["lastName"].value;
        if (b == null || b == "") {
            document.getElementById('lastName_error').innerHTML = "Last Name Can't be Empty";     
            inputs["lastName"].style.border = "1px solid red";
            
        }
        var d = inputs["email"].value;
        if (d == null || d == "") {
            document.getElementById('email_error').innerHTML = "Looks Like this is not an email";     
            inputs["email"].style.border = "1px solid red";
            inputs['email'].placeholder = "email@example/com";
            inputs['email'].style.color = " red";
            inputs['email'].style.focus = "black";
        }
        var e = inputs["password"].value;
        if (e == null || e == "") {
            document.getElementById('password_error').innerHTML = "Password Can't be Empty";     
            inputs["password"].style.border = "1px solid red";
      
        }
    });
function focus() {
    inputs['email'].style.color = "black";
    console.log('input')
}
