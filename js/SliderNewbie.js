var indicador = 0;
jQuery(document).ready(function($) {
	$('.left').on('click', function(event) {
		event.preventDefault();
		moveSlider('left');
	});
	$('.rigth').on('click', function(event) {
		event.preventDefault();
		moveSlider('rigth');
	});
	defineSizes();
});
$(window).on('resize', defineSizes);
function defineSizes() {
	$('.sliderContainer .slide').each(function(i, el) {
		$(el).css({
			'background-image': 'url('+$(el).data('background')+')',
			'height': ($('.fromContainer').width() * 0.33)+'px',
			'width': ($('.fromContainer').width())+'px'
		});
	});
	$(".fromContainer .sliderContainer").css({
		'margin-left': -(indicador * $('.fromContainer').width())+'px'
	});
}
function moveSlider(direccion){
	var limite = $('.fromContainer .slide').length;

	indicador = (direccion == 'rigth') ? indicador + 1 : indicador -1;
	indicador = (indicador >= limite) ? 0 : indicador;
	indicador = (indicador < 0) ? limite - 1 : indicador;

	$(".fromContainer .sliderContainer").animate({
		'margin-left': -(indicador * $('.fromContainer').width())+'px'
	});
}