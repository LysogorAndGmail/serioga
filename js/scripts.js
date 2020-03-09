$( function() {

}) //end ready
function togleIndexSlider(Thiss,Body){

    $('.open_tog').each(function(){
        $(this).hide();
    })

    $('.hide_tog').each(function(){
        $(this).show();
    })

    if(!Thiss.hasClass('acriv_slider')){
        $('.slide_title').each(function(){
            $(this).removeClass('acriv_slider');
            $(this).next('.slide_body').removeClass('open_body');
        })
        Thiss.addClass('acriv_slider');
        Body.addClass('open_body');
        Thiss.find('.open_tog').show();
        Thiss.find('.hide_tog').hide();
    }else{
        Thiss.removeClass('acriv_slider');
        Body.removeClass('open_body');
        Thiss.find('.hide_tog').show();
        Thiss.find('.open_tog').hide();
    }

}