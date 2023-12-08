let login = document.getElementById('btn1');
let signup = document.getElementById('btn2');
let clr = "rgb(0, 0, 0)";
let bg = "rgb(237, 237, 237)";
function signuptab() {
    let visible = document.getElementById('signup');
    let unvisible = document.getElementById('login');
    visible.style.display = "flex";
    unvisible.style.display = "none";
    signup.style.backgroundColor = clr;
    signup.style.color = bg;
    login.style.backgroundColor = bg;
    login.style.color = clr;
}
function logintab() {
    let visible = document.getElementById('login');
    let unvisible = document.getElementById('signup');
    visible.style.display = "flex";
    unvisible.style.display = "none";
    login.style.backgroundColor = clr;
    login.style.color = bg;
    signup.style.backgroundColor = bg;
    signup.style.color = clr;
}
