jQuery(document).ready(function() {
  var btn = $('#buttonup');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});

$(document).ready(function(){
    $.fn.wait = function(time, type) {
        time = time || 1000;
        type = type || "fx";
        return this.queue(type, function() {
            var self = this;
            setTimeout(function() {
                $(self).dequeue();
            }, time);
        });
    };
    function runIt() {
      $("span").wait()
              .animate({"opacity": 0.1},2000)
              .wait()
              .animate({"opacity": 1},1500,runIt);
    }
    runIt();
  });

 field.onclick = function(event) {
      let fieldCoords = this.getBoundingClientRect();

      let birdCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - bird.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - bird.clientWidth / 2
      };

      if (birdCoords.top < 0) birdCoords.top = 0;

      if (birdCoords.left < 0) birdCoords.left = 0;


      if (birdCoords.left + bird.clientWidth > field.clientWidth) {
        birdCoords.left = field.clientWidth - bird.clientWidth;
      }

      if (birdCoords.top + bird.clientHeight > field.clientHeight) {
        birdCoords.top = field.clientHeight - bird.clientHeight;
      }

      bird.style.left = birdCoords.left + 'px';
      bird.style.top = birdCoords.top + 'px';
    }