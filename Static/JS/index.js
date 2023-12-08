// JS for navigation menu button
document.getElementById('menu-btn').addEventListener('click',
    () => {
        let effect = document.getElementById('menu-btn').attributes.class;
        let ck = effect.value;
        let menuBar = document.getElementById('menu-btn-options');
        if (ck.indexOf('menu-animation') > -1) {
            document.getElementById("menu-btn").className = "menu";
            menuBar.style.display = 'none';
        }
        else {
            document.getElementById("menu-btn").classList.add("menu-animation");
            menuBar.style.display = 'flex';
        }
    });


