$(document).ready(function () {

    // $('#ani').click(function () {
    //     $('#animtext').animate({
    //         opacity: 0.5,
    //         height: '350px', 
    //         width: '350px', 
    //         color: 'red', 
    //     }, 'fast');
    // }
    // ); 

    // apply actions in queue
    $('#ani').click(function () {
        $('#animtext').animate({ opacity: 0.1 }, 2500);
        $('#animtext').animate({ opacity: 0.8 }, 1000);
        $('#animtext').animate({ width: '50px' }, 500);
    }
    )

    // $('#anitext').click().remove();







})