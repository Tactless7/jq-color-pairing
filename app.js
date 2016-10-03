var inputs = $('.color');
//console.log(inputs);
var len = inputs.length;
//console.log(len);

for (var i = 0; i < len; i++) {
	// console.log('kikou' + i);
	var color = $(inputs[i]).data('color');
	// console.log(color);
	$(inputs[i]).css('background-color', color);
}

$('.color').click(function(){
	var bgCol = $(this).data('color');
	console.log(bgCol);
	if ($('#modify-texte').is(':checked')){
		$('.main').css('color', bgCol);
	} else {
		$('body').css('background-color', bgCol);
	}
});