// set variable
let passwordInput;
let messageText;
let setPasswordButton;


// function
onload = (event) => {
    // The variable accesses the html document and give the ID the String
    passwordInput = document.getElementById('passwordInput');
    messageText = document.getElementById('msg');
    setPasswordButton = document.getElementById('passwordButton');
}

// this code will always called up if the Password changed
function onPasswordChanged(){
    const password = passwordInput.value;
    let valid = false;
    let message = '';

// If the password is empty
    if(password === ''){
        
    } 

// If the password ist to short
    else if (password.length < 8){
        message = 'Das Passwort muss mindestens 8 Zeichen lang sein.';
    }

/* The else if statement search for all in the breackets.
    Search give the results back, if the results are lower
    than 0, than there arent lower case lettes. */

    else if (password.search(/[a-z]/) < 0){
        message = "Das Passwort muss mindestens einen Kleinbuchstaben enthalten.";
    }
    else if (password.search(/[A-Z]/) < 0){
        message = "Das Passwort muss mindestens einen Großbuchstaben enthalten.";    
    }
    else if (password.search(/[0-9]/) < 0){
        message = "Das Passwort muss mindestes eine Zahl enthalten";
    } else if (password.search(/[#?!@$%^&*-]/) < 0) 
        message = 'Das Passwort muss mindestens ein Sonderzeichen enthalten';
// If everythin is wright, valid will be true and the Button will be enabled
    else{
        message = "Passwort richtig.";
        valid = true;
    }



// If the password is correct MessageText will be green
if (valid){
    messageText.style.color = 'green';
    setPasswordButton.disable = false;
    setPasswordButton.style.color = 'green';
    }
// If the password is wrong MessageText will be red
    else{
        messageText.style.color = 'red';
        setPasswordButton.disable = true;
    }
    /* In the MessageText stand the Problem of the password or that
    everything is correct*/
    messageText.innerText = message;
}
