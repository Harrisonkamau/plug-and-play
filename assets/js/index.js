$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollBottom() > 100) {
            $('.scrollToBottom').fadeIn();
        } else {
            $('.scrollToBottom').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToBottom').click(function(){
        $('html, body').animate({scrollBottom : 0},800);
        return false;
    });
});
