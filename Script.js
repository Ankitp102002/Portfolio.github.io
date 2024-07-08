$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java Developer", "Database Engineer","Data Scientist", "Android Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Java Developer", "Database Engineer", "Data Scientist", "Android Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("Message me");
    const thankYouSection = document.getElementById("thank-you");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                form.style.display = 'none';
                thankYouSection.style.display = 'block';
                thankYouSection.innerHTML = `<h2>Thank You!</h2><p>Your message has been sent successfully.</p>`;
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        const errors = data["errors"].map(error => error["message"]).join(", ");
                        throw new Error(errors);
                    } else {
                        throw new Error("There was a problem submitting your form");
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            thankYouSection.style.display = 'block';
            thankYouSection.innerHTML = `<h2>Error</h2><p>There was an error submitting your form: ${error.message}</p>`;
        });
    });
});
