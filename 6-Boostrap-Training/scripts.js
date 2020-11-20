$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});

document.querySelector('#modalLoginTrigger').addEventListener('click', function(e){
    e.preventDefault();
    $('#loginModal').modal({
        show: true
    }); 
})

document.querySelector('#reservationModalTrigger').addEventListener('click', function(e){
    e.preventDefault();
    $('#reservationModal').modal({
        show: true
    }); 
})

