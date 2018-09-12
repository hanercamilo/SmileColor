let $colors = $('.palette .colors .color');

$colors.each(function () {
    $(this).css("background-color", $(this).data('background'));
});

$colors.on('click', function () {
    $colors.toggleClass('hide');
    $(this).toggleClass('active');
    $('.color-code').html($(this).attr('data-background'));
    //$('.title')[0].style['color'] = $(this).attr('data-background');

    var temporal = $("<input>")
    $("body").append(temporal);
    temporal.val($(".color-code").text()).select();
    document.execCommand("copy");
    temporal.remove();
    

});