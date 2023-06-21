const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const result = document.getElementById('success-msg');
    const password = document.getElementById('password').value;
    let smallLetters = 0;
    let bigLetters = 0;
    let number = 0;
    let specialLetters = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
            smallLetters = smallLetters + 1;
        }
        if (password[i] >= 'A' && password[i] <= 'Z') {
            bigLetters = bigLetters + 1;
        }
        if (password[i] >= 0 && password[i] <= 9) {
            number = number + 1;
        }
        else {
            specialLetters = password.length - (number + bigLetters + smallLetters);
        }
    }
    if (password.length >= 8 && smallLetters >= 1 && bigLetters >= 1 && number >= 1 && specialLetters >= 1) {
        result.innerHTML = "Sign In Successful!!! Welcome " + name + " Learn More with BigStorm";
    }
    else {
        result.innerHTML = "Please enter a valid password (password should be of minimum 8 characters having atleast 1 small letter(a-z), 1 capital letter(A-Z), 1 digit(0-9), 1 special character";
    }
}
