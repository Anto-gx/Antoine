$('.element').click(function() {
var url = $(this).find('a').attr('href');
if (url != null)
window.location.href = url;
});
$('.element').mouseover(function() {
var url = $(this).find('a').attr('href');
if (url != null)
{
$(this).css("background", "#5c090c");
$(this).css("-moz-box-shadow", "0px 0px 8px #000000");
$(this).css("-webkit-box-shadow", "0px 0px 8px #000000");
$(this).css("box-shadow", "0px 0px 8px #000000");
}
else
$(this).css("cursor", "default");
});
$('.element').mouseout(function() {
var url = $(this).find('a').attr('href');
if (url != null)
{
$(this).css("background", "none");
$(this).css("-moz-box-shadow", "0px 0px 0px #000000");
$(this).css("-webkit-box-shadow", "0px 0px 0px #000000");
$(this).css("box-shadow", "0px 0px 0px #000000");
}
});