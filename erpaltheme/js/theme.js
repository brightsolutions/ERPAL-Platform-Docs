$(document).ready(function () {
  // syntax highlighting
  hljs.initHighlightingOnLoad();

  $('table').addClass('docutils');

  // material
  $('.dropdown-button').dropdown();
  $('.button-collapse').sideNav();
  $('h2, h3, h4, .scrollspy').scrollSpy();
  $('.toc-wrapper').pushpin({top: 0});

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
});
