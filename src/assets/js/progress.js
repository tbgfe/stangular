$(document).ready(function() {

    //some progress bar variables for the page (all sections all questions)
    var numOfQuestions = $( ".q" ).length;
    var indexOfQuestions;


    //Questions Traversal :: Forward
    $(".continue, .skip").on('click',function(){

        //set the progress bar
        indexOfQuestions = $(this).parents(".content").find(".q").index($(this).parents(".q")) + 1;

        var progression = Math.floor(indexOfQuestions*100/numOfQuestions);
        $('.progress-status .circle').attr('data-progress', progression);


        var inReview = false;
        if($(this).parents(".q").hasClass("editing")) {
            inReview = true;
        }

        //advance in question tree
        $(this).parents(".qs").removeClass('editing');
        $(this).parents(".q").removeClass('active editing').addClass('answered valid');

        if(($(this).parents(".qs").find(".q").length-1) == $(this).parents(".qs").find(".q").index($(this).parents(".q"))){
            $(this).parents(".qs").next().fadeIn().find(".q:first").addClass("active");
        } else {
            $(this).parents(".q").next().addClass('active');
        }

        if(inReview) {
            console.log("inreview");
            $(this).parents(".qs").nextAll().find(".q").removeClass('answered');
            $(this).parents(".qs").nextAll().hide();
            $(this).parents(".q").nextAll().removeClass('answered');
        }

        //set the selected answer
        var selectedAnswer = $(this).clone().children().remove().end().text();
        if($(this).hasClass("done")) {
            selectedAnswer = $(this).parents(".q").find(".selected-answer").val();
        }

        if($(this).hasClass("skip")) {
            selectedAnswer = "SKIPPED";
            $(this).parents(".q").addClass("skipped");

        }
        // if ( $(this).parent().parent().parent().hasClass('address-field') ) {
        //     var selectedAnswer = 'address';
        // };
        $(this).parents(".q").find(".answer-text").text(selectedAnswer);

    });

    //Questions Traversal :: Go Back the Progression
    $('.q .q-nav .edit').on('click',function(){
        $(this).parents(".qs").addClass('editing');
        $(this).parents(".qs").siblings().find(".q").removeClass('active');
        $(this).parents(".q").removeClass('answered').addClass('editing').siblings().removeClass('active');
        return false;
    });

  });
