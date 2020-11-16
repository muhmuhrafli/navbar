const nav = document.querySelector(".hamburger");
const responsive = document.querySelector(".responsive")

// nav.addEventListener("click", () => {

//     responsive.classList.add('active')
// })

nav.addEventListener("click", () => {
    if(responsive.classList.contains('active')){
        responsive.classList.remove('active')
    }
    else if(responsive.classList.contains('responsive')){
        responsive.classList.add('active')
    }
})
// toggle.addEventListener("click", () => {
//     if(navMobile.classList.contains('active')){
//       navMobile.classList.remove('active');
//       backdrop.classList.remove('show');
//     }
//     else if(navMobile.classList.contains('nav-mobile')){
//       navMobile.classList.add('active');
//       backdrop.classList.add('show');
//     }
//   })