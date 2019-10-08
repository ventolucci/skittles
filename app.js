const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');

navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});

$(document).ready(function() {
  //Smooth Scrolling
  $('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });

  $('#home a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });
});
