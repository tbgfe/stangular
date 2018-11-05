$(document).ready(function() {
    //INITIALIZATIONS
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    $('.mdb-select').material_select();
    $('.datepicker').pickadate({
        format: 'mm/dd/yyyy'
    });

    // full nav
    $('header .open-nav').on('click',function(){
        $('.fullnav').fadeIn('fast');
        return false;
    });

    $('.fullnav .exit').on('click',function(){
        $('.fullnav').fadeOut('fast');
        return false;
    });

    //Test for Numerical only
    $( ".numbers-only input" ).on('keyup',function(){
        if(!$.isNumeric( $(this).val() )) {
            $(this).parents(".form-field, .q").addClass('has-error');
        } else {
            $(this).parents(".form-field, .q").removeClass('has-error');
            $(this).parents(".q").find('.btn.done').show();
        }
    });
    //Characters and Spaces Only
    $( ".text-only input" ).on('keyup',function(){
        if(!/^[a-zA-Z\s]+$/.test( $(this).val() )) {
            $(this).parents(".form-field, .q").addClass('has-error');
        } else {
            $(this).parents(".form-field, .q").removeClass('has-error');
            $(this).parents(".q").find('.btn.done').show();
        }
    });
    //Characters, Spaces and Numeric
    $( ".any-input input" ).on('keyup',function(){
        $(this).parents(".q").find('.btn.done').show();
    });

    $('.select-dropdown li').on('click',function(){
        $(this).parents(".select-wrapper").find('input.select-dropdown').addClass("selected-answer");
        if ( $(this).parents('.complex').length < 1 ) {
            $(this).parents(".q").find('.btn.done').show();
        }
        $(this).parents(".select-wrapper").find('input.select-dropdown').val($(this).children("span").text());
    });

    // remove line of grid field
    $('body').on('click','.field-grid .remove',function(){
        $(this).parents(".field-group").fadeOut();
        return false;
    });
    // remove line of grid field
    $('body').on('click','.field-grid .btn-add',function(){
        var fieldGroupCounter=parseInt($(this).parents(".field-grid").find(".field-group:last").attr('data-count'))+1;

        $(this).parents(".field-grid").find(".field-group:last").clone().attr('data-count',fieldGroupCounter).insertBefore($(this).parent().parent());
        return false;
    });

    $('[name=102], [name=103]').on('click', function(){
        if ($('[name=102]:checked') && $('[name=103]:checked')) {
            $(this).parents(".q").find('.btn.done').show();
        }
    });

    $('#q-156 label').on('click',function(){
        $('main .the-box .foot .buttons .btn.next').removeClass('disabled');
        return false;
    });

    // W2 form fields
    $('.highlight.q-014').addClass('active'); // W2 first field
    $('.highlight.q-049').addClass('active'); // 1099-DIV first field
    $('.highlight.q-061').addClass('active'); // 1099-MISC first field
    $('.highlight.q-074').addClass('active'); // 1099-INT first field
    $('.highlight.q-085').addClass('active'); // 1099-G first field
    $('.highlight.q-097').addClass('active'); // 1099-B first field
    $('.highlight.q-112').addClass('active'); // 1099-R first field
    $('.highlight.q-139').addClass('active'); // 1042-S first field

    $('.qs.forms .btn.done').on('click',function(){
        var qid = '.highlight.' + $(this).parents('.q').attr('id') + ' span';
        $(qid).parent().removeClass('active').next().addClass('active');
    });
    $('.qs.forms input').on('keyup',function(){
        if ( $(this).parents('.complex').length > 0 ) {
            var qid1 = '.highlight.' + $(this).parents('.q').attr('id') + ' span.type';
            var vali1 = $(this).parents('.q').find('.select-field').find('input[type="text"]').val();
            $(qid1).html(vali1 + '-');
            var qid2 = '.highlight.' + $(this).parents('.q').attr('id') + ' span.ammount';
            var vali2 = $(this).parents('.q').find('.input-field').find('input[type="text"]').val();
            $(qid2).html(vali2);
        } else {
            var qid = '.highlight.' + $(this).parents('.q').attr('id') + ' span';
            var vali = $(this).parents('.q').find('input[type="text"]').val();
            $(qid).html(vali);
        }
    });
    $('.complex .select-dropdown li').on('click',function(){
        var qid = '.highlight.' + $(this).parents('.q').attr('id') + ' span.type';
        var vali = $(this).text();
        $(qid).html(vali);
    });
    $('#q-039 label').on('click',function(){
        var clickedRadio = $('.highlight.q-039 span:nth-child(' + $(this).find('input').val() + ')');
        $(clickedRadio).css('opacity',1);
        var qid = '.highlight.' + $(this).parents('.q').attr('id') + '';
        $(qid).removeClass('active').next().addClass('active');
    });
    $('#q-126 .continue').on('click',function(){
        if ( $(this).hasClass('btn-yes') ) {
            $('.highlight.q-126 span').css('opacity',1);
        }
        $('.highlight.q-126').removeClass('active').next().addClass('active');
    });
    $('.select-only .select-dropdown li').on('click',function(){
        var qid = '.highlight.' + $(this).parents('.q').attr('id') + ' span';
        if ( $(this).parents('.q').attr('id') == 'q-125' ) {
            var vali = $(this).text().slice(0,1);
        } else {
            var vali = $(this).text();
        }
        $(qid).html(vali);
    });
    $('.datepicker-only input').on('change',function(){
        var qid = '.highlight.' + $(this).parents('.q').attr('id') + ' span';
        var vali = $(this).val();
        $(qid).html(vali);
        $(this).parents('.q').find('.btn.done').show();
    });
    $('#q-047 .btn.done').on('click',function(){
        $('.form-sample').addClass('hidden');
        return false;
    });
    $('#q-012 .btn.done').on('click',function(){
        $('.form-sample').removeClass('hidden');
        return false;
    });

    // expand/collapse finished lists
    $('body').on('click','.q.finished .q-answer.collapsed',function(){
        $(this).removeClass('collapsed').addClass('expanded')
            .next('.expandable').slideDown();
    });
    $('body').on('click','.q.finished .q-answer.expanded',function(){
        $(this).removeClass('expanded').addClass('collapsed')
            .next('.expandable').slideUp();
    });

    // address
    $('#address').hide();
    $('#autocomplete').on('change',function(){
        $('#address, #q-048 .btn.done').show();
    });

    // stacy bar
    $('.stacy-bar .close').on('click',function(){
        $('.stacy-bar').slideUp();
        return false;
    });
});
