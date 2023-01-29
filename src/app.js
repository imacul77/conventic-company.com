
// Navbar script starts

// $(document).ready(function () {
//     window.scroll(function () {
//         if (this.scrollY > 20) {
//             $('.navlist').addClass('sticky');
//         } else {
//             $('navbar').removeClass('sticky');
//         }
//     });
// });

// Navbar script Ends

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let navlist = document.querySelector('.navlist');
let icon = document.querySelector('#icon');

icon.onclick = () => {
    navlist.classList.toggle('show');
    icon.classList.toggle('minus');
}

// let icon = document.querySelector('#icon');
// let navlist = document.querySelector('.navlist');

// icon.onclick = () => {
//     icon.classList.toggle('bi');
//     navlist.classList.toggle('show');
// }