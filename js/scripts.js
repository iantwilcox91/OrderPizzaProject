// business logic
function Pizza( size, topping ){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.checkoutCost = function () {
  return parseInt(this.size) + (this.topping).length;
};

function PostPizza(){
  var selectedSize = $('input[name=size]:checked', '#sizeOfPizza').val();
  var selectedToppings = $( ":checkbox:checked" ).map(function() { return this.value; }).get().join().split(",");
  var newPizza = new Pizza(selectedSize, selectedToppings);

  if (newPizza.size === "1"){
    var SizeString = "small";
    $(".chosenSize").text(SizeString);
  }else if(newPizza.size === "2"){
    var SizeString = "medium";
    $(".chosenSize").text(SizeString);
  }else if(newPizza.size === "3"){
    var SizeString = "large";
    $(".chosenSize").text(SizeString);
  }
  $(".chosenToppings").text(newPizza.topping);
  $(".willCost").text("$" + newPizza.checkoutCost() +".00");
}


// user interface logic
$(document).ready(function(){

  $("#goButton").click(function() {
    PostPizza();
  });

});
