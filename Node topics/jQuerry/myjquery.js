

$(document).ready(function () {

    $('#hide').click(function () {

        function loop() {

            $("#wiki").hide(1000, function () {
                console.log("hidden..");

                $("#wiki").show(1000, function () {
                    console.log("shown..");
                    loop();
                });
            });
        }
        loop();

    });

    // setInterval(function () {
    //     $("#wiki").toggle(1000);
    // }, 1500);

    // {so here msg hidden-- show -- again loop} loop()

    $('#fade1').click(() => {
        function loop() {
            $('#box1').fadeToggle(1500);
            $('#box2').fadeToggle(1500, loop); // loop runs AFTER animation ends
        }
        loop();
    });


    // $('#fade1').click(() => {

    //     function loop() {
    //         $('#box1').fadeToggle(1500, () => console.log("box 1 faded"));
    //         $('#box2').fadeToggle(1500, () => console.log("box 2 shown"));
    //         loop();
    //     }
    //     loop();
    // })

    // $('#fade1').click(() => {
    //     $('#box1').fadeOut(1500, () => console.log("box 1 faded"));
    // })


    // $('#fade2').click(() => {
    //     $('#box2').fadeToggle(1500, () => console.log("box 2 faded"));
    // })

    $('#slidebtn').click(function () {
        setInterval(() => {
            $('#slider').slideToggle(1500); 
        }, 2000);
    })


    // })
})

