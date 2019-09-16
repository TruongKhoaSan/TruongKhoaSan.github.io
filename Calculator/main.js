function insrt(num) {
	$('.calc-display').val($('.calc-display').val() + num);
}
function percent() {
	$('.calc-display').val($('.calc-display').val() / 100 );
}
function eql() {
	$('.calc-display').val(eval($('.calc-display').val()));
}
function c() {
	$('.calc-display').val('');
}
function del() {
	value = $('.calc-display').val();
	$('.calc-display').val(value.substring(0, value.length - 1));
}

var color = ["#ff7979","#EE5A24","#F79F1F","#FFC312","#C4E538","#A3CB38","#009432",];
var i = 0;
document.querySelector("#change_theme").addEventListener("click",function(){
  i = i < color.length ? ++i : 0;
document.querySelector(".calc").style.background = color[i]
})