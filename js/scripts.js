// business logic
function Pizza( size, toppings ){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.checkoutCost = function () {
  // return SOMETHING
};


// user interface logic
$(document).ready(function(){

  $("#goButton").click(function() {
    var selectedSize = $('input[name=size]:checked', '#sizeOfPizza').val();
    var selectedToppings = $( ":checkbox:checked" ).map(function() { return this.value; }).get().join().split(",");
    var newPizza = new Pizza(selectedSize, selectedToppings);
    console.log(newPizza);
  });










});
