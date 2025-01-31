let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
});


genbtn.addEventListener('click', () => {
    passbox.value = generatePassword();
})

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"

function generatePassword() {
    let genpassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += Uppercase.checked ? upperchars : "";
    allchars += Numbers.checked ? allNumbers : "";
    allchars += Symbols.checked ? allSymbols : "";

    if (allchars == "" || allchars.length == 0) {
        return genpassword;
    }

    let i = 1;
    while (i <= inputslider.value) {
        genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }
    return genpassword;
}

copyicon.addEventListener('click', () => {
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password Copied";

        setTimeout(() => {
            copyicon.innerHTML = "content_copy";
            copyicon.title = "";
        }, 3000)
    }
});
