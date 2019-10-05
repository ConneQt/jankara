$(function () {

  $('.button p').click(function () {
    var uriage = Number($('#sale-23').val()) - Number($('#sale-18').val());
    var kyaku = Number($('#kyaku-23').val()) - Number($('#kyaku-18').val());
    var karappa = Number($('#karappa-23').val()) - Number($('#karappa-18').val());
    var kyakutanka = uriage / kyaku;
    var insyoku18 = Number($('#food-18').val()) + Number($('#drink-18').val());
    var insyoku23 = Number($('#food-23').val()) + Number($('#drink-23').val());
    var insyoku = (insyoku23 - insyoku18) / kyaku;
    var karappa_per = (karappa / uriage) * 100;
    $('.answer-uriage').text('売り上げ : ' + uriage + ' (円)');
    $('.answer-kyaku').text('客数 : ' + kyaku + ' (人)');
    $('.answer-kyaku-tanka').text('客単価 : ' + kyakutanka + ' (円)');
    $('.answer-insyoku').text('飲食単価 : ' + insyoku + ' (円)');
    $('.answer-karappa').text('からっぱ売り上げ : ' + karappa + ' (円)');
    $('.answer-karappa-tanka').text('からっぱ比率 : ' + karappa_per + ' (%)');
  });

});
