// stickyHead v0.1 - https://github.com/exabyssus/stickyHead - MIT Licensed
(function( $ ){
  
  $.stickyHead = function(op){

      if( ! this.length)
          return false;

      var options = $.extend({
          topStickOffset : 100, // How far header will stick to the top before scrolling away. (default: 100) (px),
          addPadding : true // If true, will add padding-top to body. (default: true)
      }, op);

      var el = $(this).eq(0);

      var elHeight = el.outerHeight();
      var lstPos = 0;

      var fOut = true;

      el.css('position', 'absolute')
          .css('top', $(window).scrollTop())
          .css('left', 0)
          .css('width', '100%');

      if(options.addPadding)
          $('body').css('padding-top', elHeight);


      $(window).on('scroll', function(e){

          var curPos = $(this).scrollTop();

          var curElPos = el.offset().top;

          if(curPos < lstPos || curPos < options.topStickOffset)
          {
              if(curPos > curElPos + elHeight && fOut)
              {
                  fOut = false;

                  var offset = curPos > elHeight * 2 ? elHeight * 2 : elHeight;

                  if(curPos < elHeight)
                  {
                      offset = 0;
                  }

                  el.css('top', curPos - offset);
              }

              if(curPos < curElPos || curPos < options.topStickOffset)
              {
                  el.css('position', 'absolute').css('top', curPos);
              }
          }
          else
          {
              fOut = true;
          }

          lstPos = curPos;
      });
  };

})( jQuery );
