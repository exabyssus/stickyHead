// stickyHead v0.1 - https://github.com/exabyssus/stickyHead - MIT Licensed
(function( $ ){

    $.fn.stickyHead = function(op){

        if( ! this.length)
            return false;

        var options = $.extend({
            topStickOffset : 100, // How far header will stick to the top before scrolling away. (default: 100) (px),
            addPadding : true // If true, will add padding-top to body. (default: true)
        }, op);

        var el = $(this).eq(0);

        var elHeight = el.outerHeight();

        var lstPos = 0;
        var dChange = 0;

        el.css('position', 'fixed')
            .css('top', $(window).scrollTop())
            .css('left', 0)
            .css('width', '100%');

        if(options.addPadding)
            $('body').css('padding-top', elHeight);


        $(window).on('scroll', function(){

            var curPos = $(this).scrollTop();

            var curElPos = el.offset().top;


            if(curPos > options.topStickOffset)
            {
                // scroll up
                if(curPos < lstPos) {

                    var offset = curPos > elHeight * 2 ? elHeight * 2 : elHeight;

                    if (dChange == 1)
                    {
                        el.css('position', 'absolute').css('top', curPos - offset);
                    }
                    else if (curPos <= curElPos) {
                        el.css('position', 'fixed').css('top', 0);
                    }

                    dChange = -1;
                }
                // scroll down
                else {

                    if(dChange == -1) {
                        el.css('position', 'absolute').css('top', curPos);
                    }

                    dChange = 1;
                }
            }

            lstPos = curPos;
        });
    };

})( jQuery );
