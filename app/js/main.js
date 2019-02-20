$(document).ready(function() {
   $("#carousel").owlCarousel( {
       loop: true,
       autoplay: true,
       smartSpeed: 3000,
       autoplayTimeout: 5000,
       responsive: {
           300: {
               items: 1
           },
           
           400: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   });
});
