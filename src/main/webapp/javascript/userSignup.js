// input validator
function input_check(input){
    var letters = /^[\w \-']+$/;
    if(letters.test(input)){
        console.log("passed check");
        return true;
    } else {
        console.log("illegal input");
        return false;
    }
}

// send username to backend
function postUsername(username) {
    const params = new URLSearchParams();

    params.append('text-input-user-name', username);

    fetch('/SignUp', {method: 'POST', username});
}


// show/hide message
var errorMsg = document.getElementById("error-msg");
var emptyMsg = document.getElementById("empty-msg");
var successMsg = document.getElementById("success-msg");

var msgDiv = document.getElementById("status-msg");

// get username
var username = document.getElementById("signup-user-name");

username.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        if(username.value === "") {
            msgDiv.innerHTML = `<p class="error">Username cannot be empty.</p>`;
        } else if(input_check(username.value)){
            msgDiv.innerHTML = `<p class="success">Sign up successful!</p>`;

            console.log("here!!");
            console.log("username is");
            console.log(username.value);

            postUsername(username.value);
        } else {
            msgDiv.innerHTML = `<p class="error">Please use letters and numbers only.</p>`;
        }

        // clear input box
        username.value = "";
    }
});
