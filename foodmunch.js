$(document).ready(function() {
  
  
  $("li").click(function(){
    let address=prompt('Your order has been confirmed please eneter your your address')
    if(address!==null){
      alert(`Thank you for ordering 
    We will shortly place your order at location ${address}
    hope you will enjoy the meal!!!
     happy Meal;;;`)
      
    }
    else{
      alert(`Sorry You haven't orders anything`)
    }
  })

  $("#glitter-button").click(function() {
    // Generate a random position within the container
    var containerWidth = $("#glitter-container").width();
    var containerHeight = $("#glitter-container").height();
    var positionLeft = Math.floor(Math.random() * containerWidth);
    var positionTop = Math.floor(Math.random() * containerHeight);

    // Create a new glitter element
    var glitter = document.createElement("div");
    glitter.classList.add("glitter");
    glitter.style.left = positionLeft + "px";
    glitter.style.top = positionTop + "px";

    // Add the glitter element to the container
    $("#glitter-container").append(glitter);

    // Display the image after a delay of 2000 milliseconds (2 seconds) with a fading effect
    var image = $(".thanking-customers-section-img");
    image.attr("src", "thanking-customers-section-img.jpg");
      image.attr("src", "OIP.jpg"); // Set the open gift box image after the fade-in animation
     
    
    // Set initial opacity to 0
    
  });

  // Generate a random position within the container
  var containerWidth = $("#glitter-container").width();
  var containerHeight = $("#glitter-container").height();
  var positionLeft = Math.floor(Math.random() * containerWidth);
  var positionTop = Math.floor(Math.random() * containerHeight);

  // Create a new glitter element
  var glitter = document.createElement("div");
  glitter.classList.add("glitter");
  glitter.style.left = positionLeft + "px";
  glitter.style.top = positionTop + "px";
  $("#glitter-container2").append(glitter);
});
function placeOrder() {
  var name = $("#name").val();
  var email = $("#email").val();
  var selectedFoodItems = [];
  $("input[type='checkbox']:checked").each(function() {
    selectedFoodItems.push($(this).val());
  });
  var paymentMethod = $("#payment").val();
  var address = $("#address").val();

  $(".selected-food-items").html("Selected Food Items: " + selectedFoodItems.join(", "));

 
  var message = "Order Placed!\n\nName: " + name + "\nEmail: " + email + "\nSelected Food Items: " + selectedFoodItems.join(", ") + "\nPayment Method: " + paymentMethod + "\nDelivery Address: " + address +"Thank You For Ordering Enjoy the taste!!! have a Nice day!!!";
  alert(message);
//  alert(<img src="food truck.jpg"/>)
 
  $("#orderModal").modal("hide");
}