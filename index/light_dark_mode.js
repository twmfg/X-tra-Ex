const bgSwitch = document.querySelector('#bgSwitch');
const navMenu = document.querySelector('.nav_menu');
const hamburgerMenu = document.querySelector('#resNav');

bgSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
    bgSwitch.setAttribute('class', 'fa-solid fa-sun')
    bgSwitch.style.color = '#fff';
    bgSwitch.style.cursor = 'pointer';
    bgSwitch.style.fontSize = '1.7em';
    dp.style.backgroundImage = 'url(./african-american-looking-pointing-up-pleased-orange-wall.jpg)';
    
    navMenu.style.backgroundImage = 'linear-gradient(rgb(0, 0, 0), rgba(0, 10, 33, 0.97)), url(./GLOBA__LOGIO.png)'
}
else {
    bgSwitch.setAttribute('class', 'fa-solid fa-moon')
    bgSwitch.style.color = '#000';
    dp.style.backgroundImage = 'url(./capglassman.png)';
    navMenu.style.backgroundImage = 'none'

   }
})


const logo1 = document.querySelector('.logo1');
const dp = document.querySelector('.dp');

hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    if(navMenu.classList.contains('active')){
        navMenu.classList.remove('active');
        // navMenu.style.trans = 'linear-gradient(to right, red, black)'
        navMenu.style.transform = 'translateX(195px)';
        hamburgerMenu.setAttribute('class', 'fa-solid fa-times-circle')
        
    } else {
        navMenu.classList.add('active');
        hamburgerMenu.setAttribute('class', 'fa-solid fa-bars')
        
    }
})

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
    if(hamburgerMenu.classList.toggle('active')){
        hide.setAttribute('class', 'fa-solid fa-times-circle')
    
    } else {
    hide.setAttribute('class', 'fa-solid fa-bars')

    }
})


document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
}))

