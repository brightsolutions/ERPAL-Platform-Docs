(function ($, hljs, window, undefined) {
  $(function () {
    // syntax highlighting
    hljs.initHighlightingOnLoad();

    $('table').addClass('docutils');

    // material
    $('.dropdown-button').dropdown();
    $('.button-collapse').sideNav();
    $('h2, h3, h4, .scrollspy').scrollSpy();
    $('.toc-wrapper').pushpin({top: 0});

    // toc
    var tocTimer = undefined;

    function setTocWidth () {
      clearTimeout(tocTimer);
      tocTimer = setTimeout(
        function () {
          $('.toc-wrapper').width($('.toc').width());
        },
        50
      );
    }

    $(window).on('resize', setTocWidth)
      .trigger('resize');


    // iframe wrapper
    $('.youtube-iframe').wrap('<div class="youtube-iframe-wrap"></div>');

    // youtube videos for timestamp skipping
    var $player = $('[data-video]');

    if ($player.length) {
      var videoID = $player.data('video'),
        $scrollBody = $('html, body'),
        player,
        time;

      // prep markup
      $player.addClass('youtube-iframe-nowrap');
      if (!$player.attr('id')) {
        $player.attr('id', 'player1');
      }

      // load youtube api
      if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        $.getScript('//www.youtube.com/iframe_api');
      }

      // init player
      function onYouTubeIframeAPIReady() {
        player = new YT.Player(
          $player.attr('id'),
          {
            videoId: videoID,
            events:  {
              'onStateChange': onPlayerStateChange
            }
          }
        );
      }

      // on change
      function onPlayerStateChange () {
        if (time) {
          player.seekTo(time);
        }
      }

      // seek to timestamp
      function playerSeekTo (settime) {
        var settime = settime.split(':')
          .map(function (str) {
            return parseInt(str, 10);
          });

        // calc time
        if (settime.length === 2) {
          time = settime[0] * 60 + settime[1];
        }
        else {
          time = settime[0];
        }

        // ..  and play
        switch (player.getPlayerState()) {
          case 0: // ended
          case 1: // is playing
          case 5: // positioned
            player.seekTo(time);
            break;

          default:
            // trigger loading of the video
            player.playVideo();
            break;
        }

        $scrollBody.animate({scrollTop: 0}, 'slow');
      }

      // bind listener
      $('.seekto').on('click.video', function (e) {
        e.preventDefault();
        playerSeekTo($(this).text());
      });
    }
  });
})(jQuery, hljs, window);


function onYouTubeIframeAPIReady() {
  console.log('ready');
}
