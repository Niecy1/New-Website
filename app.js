const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change'),
    function(e) {
        update_amounts();
    });
});
function update_amounts(){
    var sum = 0.0;
    $('#cart-page > tbody > tr').each(function) {
        var quantity =$(this).find('.quantity').val();
        var price = $(this).find('.price').val();
        var subtotal = (quantity*price)
        sum+=subtotal;
        $(this).find('.subtotal').text(''+amount);
    });
    $('.total').text(sum);
}


var incrementQty;
var decrementQty;
var plusBtn = $(".cart-quantity-plus");
var minusBtn = $(".cart-quantity-minus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".quantity")
    $n.val(Number($n.val())+1);
    update_amounts()
});

var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".quantity");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal-1);
    }
    update_amounts();
}