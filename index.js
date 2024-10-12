
var typed = new Typed("#text", {
    strings : ["Front-End Developer", "Freelancer", "Streamer"],
    typeSpeed : 50,
    backSpeed : 25,
    loop : true
    });

    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".tag");
      
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];
          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("animation");
          } else {
            $(tag).removeClass("animation");
          }
        }
      });

      
   function darkMode(){
    var element = document.body;
    element.dataset.bsTheme = 
        element.dataset.bsTheme == "light" ? "dark" : "light";
   }