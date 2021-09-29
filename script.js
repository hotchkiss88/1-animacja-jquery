$(document).ready(function () {
  let btn = $("#btn");

  let square = $(".square");
  
  // $('<h2>Animacja zakończona</h2>').appendTo(square).hide();


  btn.on("click", function () {
    square.animate({
      right: "100px",
      width: "100px",
      height: "100px"
    }, 3000,
      function () {
        $(this).animate({
          backgroundColor: "blue"
        }, 5000,
        function(){
          console.log("Animacja");
          square.html('<h2>Animacja zakończona</h2>')
        })
      }); 
    });
});
