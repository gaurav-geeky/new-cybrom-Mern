$(document).ready(function () {

    $("#btn2").click(function () {

        var div = $("#box2");
        div.animate({
            height: '+=50px',
            width: '+=50px',
            opacity: '0.4',
            top: '+=50px',
            left: '+=50px',
        },
            "slow");
    });



    $("#btn1").click(function () {
        var div = $("#box1");
        div.animate({ height: '300px', width: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', width: '100px', opacity: '0.4' }, "slow");
        div.animate({ height: '250px', width: '150px', opacity: '0.4' }, "slow");
        div.animate({ width: '220px', opacity: '0.4' }, "slow");
    });






});