window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});


document.addEventListener('DOMContentLoaded', function() {
    var contactMeButton = document.querySelector('.contactme');

    contactMeButton.addEventListener('click', function() {
        var fourthPage = document.getElementById('fourthpage');
        fourthPage.scrollIntoView({behavior: 'smooth'});
    });
});


window.onload = function() {
    document.getElementById('a').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.firstpage').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('b').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.secondpage').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('c').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.thirdpage').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('d').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.fourthpage').scrollIntoView({ behavior: 'smooth' });
    });
};

