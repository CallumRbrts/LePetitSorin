$(function() {
    $("#form .form-button").click(function() {
      var data = {
         name: $("#name").val(),
         email: $("#email").val(),
         message: $("#message").val()
      };

        console.log(data);
        $.ajax({
            type: "POST",
            url: "php/email.php",
            data: data,
            success: function(){
              console.log("success");
            }
        });

        return false;
    });
});
