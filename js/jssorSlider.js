jQuery(document).ready(function($) {
  var options = {
    $AutoPlay: 1, //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
    $Idle: 4000, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
    $SlideDuration: 500, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
    $DragOrientation: 3, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
    $UISearchMode: 0, //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).

    $ThumbnailNavigatorOptions: {
      $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
      $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always

      $Loop: 1, //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, default value is 1
      $SpacingX: 3, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
      $SpacingY: 3, //[Optional] Vertical space between each thumbnail in pixel, default value is 0

      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
        $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
        $Steps: 6 //[Optional] Steps to go for each navigation request, default value is 1
      }
    }
  };

  var jssor_slider1 = new $JssorSlider$("slider1_container", options);

  /*#region responsive code begin*/
  //you can remove responsive code if you don't want the slider scales while window resizing
  function ScaleSlider() {
    var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
    if (parentWidth) jssor_slider1.$ScaleWidth(Math.min(parentWidth, 720));
    else $Jssor$.$Delay(ScaleSlider, 30);
  }

  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
});
