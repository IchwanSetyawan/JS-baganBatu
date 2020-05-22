
//manual nav responsive
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');        
});


//multiple readMore

function myFunction(city) {
    let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.card[data-city="${city}"] .more`);
    let btnText = document.querySelector(`.card[data-city="${city}"] .readMore`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Selengkapnya";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Lebih sedikit";
        moreText.style.display = "inline";
    }
}


//event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap element
    var elementTujuan = $(tujuan);
    
     $('html, body').animate({
         scrollTop: elementTujuan.offset().top-70
     }, 1000);

     e.preventDefault();
     
});
