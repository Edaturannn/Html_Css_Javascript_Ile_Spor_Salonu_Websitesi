$(function () {
    $('.nav-link').on({
        mouseover: function () {
            $(this).css("color", "aqua");
            $(this).css("border-radius", "20px");
            $(this).css("border","3px solid antiquewhite")
        },

        mouseleave: function () {
            $(this).css("color", "antiquewhite");
            $(this).css("border-radius", "0px");
            $(this).css("border", "3px")
        }
    });

    $('#col1').on({
        mouseover: function () {
            $(this).css("background-color", "#555");
        },
        mouseleave: function () {
            $(this).css("background-color", "aqua");
        }
    });

    $('#col2').on({
        mouseover: function () {
            $(this).css("background-color", "#555");
        },
        mouseleave: function () {
            $(this).css("background-color", "aqua");
        }
    });

    $('#col3').on({
        mouseover: function () {
            $(this).css("background-color", "#555");
        },
        mouseleave: function () {
            $(this).css("background-color", "aqua");
        }
    });

    $('#col4').on({
        mouseover: function () {
            $(this).css("background-color", "#555");
        },
        mouseleave: function () {
            $(this).css("background-color", "aqua");
        }
    });



    $('#col5').mouseover(function () {
        $(this).animate({
            height: "300px"
        },10000);
    });

    $('#col5').mouseleave(function () {
        $(this).animate({
            height: "200px"
        }, 10000);
    });


    $('#col6').mouseover(function () {
        $(this).animate({
            height: "300px"
        }, 5000);
    });

    $('#col6').mouseleave(function () {
        $(this).animate({
            height: "200px"
        }, 5000);
    });

    $('#col7').mouseover(function () {
        $(this).animate({
            height: "300px"
        }, 5000);
    });

    $('#col7').mouseleave(function () {
        $(this).animate({
            height: "200px"
        }, 5000);
    });


    $('#iletisim').mouseover(function () {
        $(this).animate({
            height: "600px"
        }, 5000);
    });

    $('#iletisim').mouseleave(function () {
        $(this).animate({
            height: "400px"
        }, 1000);
    });



    $('#g1').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g1').click(function () {
        $(this).animate({
            height: "400px",
            width:"700px"
        },4000);
    });

    $('#g1').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width:"400px"
        },4000);
    });




    $('#g2').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g2').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        },4000);
    });

    $('#g2').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        },4000);
    });





    $('#g3').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g3').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        },4000);
    });

    $('#g3').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        },4000);
    });



    $('#g4').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g4').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        }, 4000);
    });

    $('#g4').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        }, 4000);
    });




    $('#g5').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g5').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        }, 4000);
    });

    $('#g5').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        }, 4000);
    });


    $('#g6').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g6').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        }, 4000);
    });

    $('#g6').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        }, 4000);
    });


    $('#g7').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g7').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        }, 4000);
    });

    $('#g7').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        }, 4000);
    });

    $('#g8').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g8').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        }, 4000);
    });

    $('#g8').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        }, 4000);
    });





    $('#g9').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#g9').click(function () {
        $(this).animate({
            height: "400px",
            width: "700px"
        }, 4000);
    });

    $('#g9').mouseleave(function () {
        $(this).animate({
            height: "200px",
            width: "400px"
        }, 4000);
    });



    $('.p1').mouseover(function () {
        $(this).css("cursor", "pointer");
    });
    $('.p1').mouseover(function () {
        $(this).css("color", "aqua");
    });
    $('.p1').mouseleave(function () {
        $(this).css("color", "#555");
    });


    $('#i1').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#i1').click(function () {
        $('#cerez').slideUp(6000);
        alert("Tum Cerezleri Kabul Ettiniz!!!");
    });


    $('#R1').mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $('#R1').mouseover(function () {
        $(this).animate({
            height: "500px",
            width:"700px"
        }, 3000);
    });

    $('#R1').mouseleave(function () {
        $(this).animate({
            height: "380px",
            width: "490px"
        }, 4000);
    });


    $('#btn1').click(function () {
        swal("Good job!", "You clicked the button!", "success");
    });
});