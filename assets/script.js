
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle .addEventListener('click', function() {
    nav.classList.toggle('slide');
})


//event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap element
    var elementTujuan = $(tujuan);
    
     $('html, body').animate({
         scrollTop: elementTujuan.offset().top-80
     }, 1000);

     e.preventDefault();
     

});



// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-100px";
//     }
//     prevScrollpos = currentScrollPos;
// }
