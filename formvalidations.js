

$(document).ready(function() {
    console.log("asda");
    $("#name").change(function() {
      var name = $(this).val();
      var rename1 = $("#rename1");
      
      if (name === '') {
        rename1.text("*required");
      } else {
        rename1.text('');
      }
    });
    $("#email").on("input", function() {
        var email = $(this).val();
        var rename = $("#rename");
    
        if (email === '') {
          rename.text("*required");
        } else {
          rename.text('');
        }
      });
    $("#submit").click(function(event) {
      event.preventDefault();
      
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var rename1 = $("#rename1");
      var rename = $("#rename");
  
      // Validate name
      if (name === "") {
        rename1.text("*required");
      } else {
        rename1.text("");
      }
  
      // Validate email
      if (email === "") {
        rename.text("*required");
      } else {
        rename.text("");
      }
  
      // Perform further processing or submit the form if validation passes
    });
  
    // Show corresponding fields based on selected interest
    $("input[name='exampleRadios']").change(function() {
      $(".fields div").addClass("d-none");
      $("#" + $(this).val().toLowerCase() + "_fields").removeClass("d-none");
    });
  
    // Perform additional actions on input focus
    $("input").focus(function() {
      $(this).addClass("active-input");
    });
  
    // Perform additional actions on input blur
    $("input").blur(function() {
      $(this).removeClass("active-input");
    });
    
  });
  