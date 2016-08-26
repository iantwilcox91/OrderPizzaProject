// business logic
function Pizza( size, topping ){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.checkoutCost = function () {
  return parseInt(this.size) + (this.topping).length;
};










// user interface logic
$(document).ready(function(){

  $("#goButton").click(function() {
    var selectedSize = $('input[name=size]:checked', '#sizeOfPizza').val();
    var selectedToppings = $( ":checkbox:checked" ).map(function() { return this.value; }).get().join().split(",");
    var newPizza = new Pizza(selectedSize, selectedToppings);
    console.log(newPizza);
    console.log(newPizza.checkoutCost());
  });



});
