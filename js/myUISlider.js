$(function() {
      $("#slider-range").noUiSlider({
          start: [0,48],
          connect: true,
          step: 1,
          range: {
              min: 0,
              max: 48
          }
      });

      $("#slider-range").on({
        slide: function(){
          $("#lowerLabel1").text(Math.floor($("#slider-range").val()[0]/2)+":"+$("#slider-range").val()[0]%2*3+"0");
          $("#upperLabel1").text(Math.floor($("#slider-range").val()[1]/2)+":"+$("#slider-range").val()[1]%2*3+"0");
        }
      });

      $("#slider-range2").noUiSlider({
          start: [0,48],
          connect: true,
          step: 1,
          range: {
              min: 0,
              max: 48
          }
      });

      $("#slider-range2").on({
        slide: function(){
          $("#lowerLabel2").text(Math.floor($("#slider-range2").val()[0]/2)+":"+$("#slider-range2").val()[0]%2*3+"0");
          $("#upperLabel2").text(Math.floor($("#slider-range2").val()[1]/2)+":"+$("#slider-range2").val()[1]%2*3+"0");
        }
      });

      $("#slider-range3").noUiSlider({
          start: [0,48],
          connect: true,
          step: 1,
          range: {
              min: 0,
              max: 48
          }
      });

      $("#slider-range3").on({
        slide: function(){
          $("#lowerLabel3").text(Math.floor($("#slider-range3").val()[0]/2)+":"+$("#slider-range3").val()[0]%2*3+"0");
          $("#upperLabel3").text(Math.floor($("#slider-range3").val()[1]/2)+":"+$("#slider-range3").val()[1]%2*3+"0");
        }
      });

      $("#slider-range4").noUiSlider({
          start: [0,48],
          connect: true,
          step: 1,
          range: {
              min: 0,
              max: 48
          }
      });

      $("#slider-range4").on({
        slide: function(){
          $("#lowerLabel4").text(Math.floor($("#slider-range4").val()[0]/2)+":"+$("#slider-range4").val()[0]%2*3+"0");
          $("#upperLabel4").text(Math.floor($("#slider-range4").val()[1]/2)+":"+$("#slider-range4").val()[1]%2*3+"0");
        }
      });

      $(window).scroll(function(){
        $("#filters").css({"margin-top": (Math.min(Math.max($(window).scrollTop()-400,0),350)) + "px"});
      });

    })

$(function() {
          $.material.init();
          $(".slider").noUiSlider({
              start: 40,
              connect: "lower",
              range: {
                  min: 0,
                  max: 100
              }
          });
      });