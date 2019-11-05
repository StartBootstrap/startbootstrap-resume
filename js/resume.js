// import { EMAIL_KEY } from "../key.js";
(function($) {
  ("use strict"); // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav"
  });

  // click to send email
  $(".scheduale").click(() => sendEmail());
  $(".hero-email").click(() => sendEmail());

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     if ($(window).width() <= 967)
  //       $(".bg-primary").css({
  //         top: 0,
  //         transition: "0.4s ease-out"
  //       });
  //   } else {
  //     if ($(window).width() <= 967) $(".bg-primary").css("top", "-60px");
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  /* GALLERY */

  $(function() {
    var selectedClass = "";
    $(".filter").click(function() {
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $(".all")
        .not("." + selectedClass)
        .fadeOut()
        .removeClass("animation");
      setTimeout(function() {
        $("." + selectedClass)
          .fadeIn()
          .addClass("animation");
        $("#gallery").fadeTo(300, 1);
      }, 300);
    });
  });

  $(".phone-number").click(() => {
    window.open("tel:6476404714");
  });

  /* Gallery hover */
  $(function() {
    $(".all").hover(
      function() {
        if ($(window).width() >= 567) {
          let element = $(this);
          let className = element.attr("class");
          let category = className.slice(-1);
          Number(category);

          const CATEGORIES = {
            0: "Front",
            1: "Property",
            2: "Kitchen",
            3: "Bathroom",
            4: "Living Room",
            5: "Bedroom",
            6: "Office",
            7: "Laundry Room"
          };
          if (CATEGORIES[category] === undefined) {
            $(this)
              .find(".img-fluid")
              .css("opacity", 1);

            $(function() {
              $(".img-fluid").click(function() {
                const parent = $(".row");
                const src = $(this).attr("src");
                const listOfStrings = src.split("/");
                const imgNum = listOfStrings[listOfStrings.length - 1];
                const id = imgNum.split(".")[0];
                const container = $(".gallery-image-container");
                $(".img-fluid").css("opacity", 0.3);
                container.html("");
                container.append(`    <script src="js/jssor.slider-28.0.0.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        window.jssor_1_slider_init = function() {

            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2},
              {$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InQuint,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Rows: 2,
                $SpacingX: 14,
                $SpacingY: 12,
                $Orientation: 2,
                $Align: 156
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 960;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
    </script>
    <style>
        /*jssor slider loading skin spin css*/
        .jssorl-009-spin img {
            animation-name: jssorl-009-spin;
            animation-duration: 1.6s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @keyframes jssorl-009-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /*jssor slider arrow skin 093 css*/
        .jssora093 {display:block;position:absolute;cursor:pointer;}
        .jssora093 .c {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;}
        .jssora093 .a {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;}
        .jssora093:hover {opacity:.8;}
        .jssora093.jssora093dn {opacity:.6;}
        .jssora093.jssora093ds {opacity:.3;pointer-events:none;}

        /*jssor slider thumbnail skin 101 css*/
        .jssort101 .p {position: absolute;top:0;left:0;box-sizing:border-box;background:#000;}
        .jssort101 .p .cv {position:relative;top:0;left:0;width:100%;height:100%;border:2px solid #000;box-sizing:border-box;z-index:1;}
        .jssort101 .a {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;visibility:hidden;}
        .jssort101 .p:hover .cv, .jssort101 .p.pdn .cv {border:none;border-color:transparent;}
        .jssort101 .p:hover{padding:2px;}
        .jssort101 .p:hover .cv {background-color:rgba(0,0,0,6);opacity:.35;}
        .jssort101 .p:hover.pdn{padding:0;}
        .jssort101 .p:hover.pdn .cv {border:2px solid #fff;background:none;opacity:.35;}
        .jssort101 .pav .cv {border-color:#fff;opacity:.35;}
        .jssort101 .pav .a, .jssort101 .p:hover .a {visibility:visible;}
        .jssort101 .t {position:absolute;top:0;left:0;width:100%;height:100%;border:none;opacity:.6;}
        .jssort101 .pav .t, .jssort101 .p:hover .t{opacity:1;}
    </style>
    <div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:960px;height:480px;overflow:hidden;visibility:hidden;background-color:#24262e;">
        <!-- Loading Screen -->
        <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
            <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="img/spin.svg" />
        </div>
        <div data-u="slides" class="slides" style="cursor:default;position:relative;top:0px;left:240px;width:720px;height:480px;overflow:hidden;">
            <div>
                <img id="first-image" data-u="image" src="img/img2.JPG" />
                <img id="first-image" data-u="thumb" src="img/img2.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img3.JPG" />
                <img data-u="thumb" src="img/img3.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img4.JPG" />
                <img data-u="thumb" src="img/img4.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img5.JPG" />
                <img data-u="thumb" src="img/img5.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img6.JPG" />
                <img data-u="thumb" src="img/img6.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img7.JPG" />
                <img data-u="thumb" src="img/img7.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img8.JPG" />
                <img data-u="thumb" src="img/img8.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img9.JPG" />
                <img data-u="thumb" src="img/img9.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img10.JPG" />
                <img data-u="thumb" src="img/img10.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img11.JPG" />
                <img data-u="thumb" src="img/img11.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img12.JPG" />
                <img data-u="thumb" src="img/img12.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img13.JPG" />
                <img data-u="thumb" src="img/img13.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img14.JPG" />
                <img data-u="thumb" src="img/img14.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img15.JPG" />
                <img data-u="thumb" src="img/img15.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img16.JPG" />
                <img data-u="thumb" src="img/img16.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img17.JPG" />
                <img data-u="thumb" src="img/img17.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img18.JPG" />
                <img data-u="thumb" src="img/img18.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img19.JPG" />
                <img data-u="thumb" src="img/img19.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img20.JPG" />
                <img data-u="thumb" src="img/img20.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img21.JPG" />
                <img data-u="thumb" src="img/img21.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img22.JPG" />
                <img data-u="thumb" src="img/img22.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img23.JPG" />
                <img data-u="thumb" src="img/img23.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img24.JPG" />
                <img data-u="thumb" src="img/img24.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img25.JPG" />
                <img data-u="thumb" src="img/img25.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img26.JPG" />
                <img data-u="thumb" src="img/img26.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img27.JPG" />
                <img data-u="thumb" src="img/img27.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img28.JPG" />
                <img data-u="thumb" src="img/img28.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img29.JPG" />
                <img data-u="thumb" src="img/img29.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img30.JPG" />
                <img data-u="thumb" src="img/img30.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img31.JPG" />
                <img data-u="thumb" src="img/img31.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img32.JPG" />
                <img data-u="thumb" src="img/img32.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img33.JPG" />
                <img data-u="thumb" src="img/img33.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img34.JPG" />
                <img data-u="thumb" src="img/img34.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img35.JPG" />
                <img data-u="thumb" src="img/img35.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img36.JPG" />
                <img data-u="thumb" src="img/img36.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img37.JPG" />
                <img data-u="thumb" src="img/img37.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img38.JPG" />
                <img data-u="thumb" src="img/img38.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img39.JPG" />
                <img data-u="thumb" src="img/img39.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img40.JPG" />
                <img data-u="thumb" src="img/img40.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img41.JPG" />
                <img data-u="thumb" src="img/img41.JPG" />
            </div>
            <a data-u="any" href="https://www.jssor.com" style="display:none">slider bootstrap</a>
        </div>
        <!-- Thumbnail Navigator -->
        <div data-u="thumbnavigator" class="jssort101" style="position:absolute;left:0px;top:0px;width:240px;height:480px;background-color:#000;" data-autocenter="2" data-scale-left="0.75">
            <div data-u="slides">
                <div data-u="prototype" class="p" style="width:99px;height:66px;">
                    <div data-u="thumbnailtemplate" class="t"></div>
                    <svg viewbox="0 0 16000 16000" class="cv">
                        <circle class="a" cx="8000" cy="8000" r="3238.1"></circle>
                        <line class="a" x1="6190.5" y1="8000" x2="9809.5" y2="8000"></line>
                        <line class="a" x1="8000" y1="9809.5" x2="8000" y2="6190.5"></line>
                    </svg>
                </div>
            </div>
        </div>
        <!-- Arrow Navigator -->
        <div data-u="arrowleft" class="jssora093" style="width:50px;height:50px;top:0px;left:270px;" data-autocenter="2">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                <polyline class="a" points="7777.8,6080 5857.8,8000 7777.8,9920 "></polyline>
                <line class="a" x1="10142.2" y1="8000" x2="5857.8" y2="8000"></line>
            </svg>
        </div>
        <div data-u="arrowright" class="jssora093" style="width:50px;height:50px;top:0px;right:30px;" data-autocenter="2">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                <polyline class="a" points="8222.2,6080 10142.2,8000 8222.2,9920 "></polyline>
                <line class="a" x1="5857.8" y1="8000" x2="10142.2" y2="8000"></line>
            </svg>
        </div>
    </div>
    <script type="text/javascript">jssor_1_slider_init();
    </script>`);
                // $(".modal").modal("show");
                // $(".modal-backdrop").hide();
                // $(".modal").on("show.bs.modal", function(event) {
                //   var idx = $(".modal:visible").length;
                //   $(this).css("z-index", 1040 + 10 * idx);
                // });

                // $(".modal").on("hide.bs.modal", function(event) {
                //   var idx = $(".modal:visible").length - 1; // raise backdrop after animation.
                //   $(".modal-backdrop").hide();
                //   $(".modal").hide();
                // });
                // $(".modal").on("hidden.bs.modal", function(e) {
                //   if ($(".modal").hasClass("in")) {
                //     $("body").addClass("modal-open");
                //   }
                // });
              });
            });
          } else {
            $(this).append(
              ` <div class="middle"><div class="text" ><a href="#gallery">${CATEGORIES[category]}</a></div></div>`
            );
            if (CATEGORIES[category] === "Property") {
              $(".text").css("padding", "30% 0");
            }
            $(function() {
              $(".text ").click(function(e) {
                const parent = $(".row");
                const src = $(this)
                  .parentsUntil(parent)
                  .find(".img-fluid")
                  .attr("src");
                const listOfStrings = src.split("/");
                const imgNum = listOfStrings[listOfStrings.length - 1];
                const id = imgNum.split(".")[0];
                let container = $(".gallery-image-container");
                $(".img-fluid").css("opacity", 0.3);
                container.html("");

                container.append(`    <script src="js/jssor.slider-28.0.0.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        window.jssor_1_slider_init = function() {

            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2},
              {$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InQuint,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Rows: 2,
                $SpacingX: 14,
                $SpacingY: 12,
                $Orientation: 2,
                $Align: 156
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 960;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
    </script>
    <style>
        /*jssor slider loading skin spin css*/
        .jssorl-009-spin img {
            animation-name: jssorl-009-spin;
            animation-duration: 1.6s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @keyframes jssorl-009-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /*jssor slider arrow skin 093 css*/
        .jssora093 {display:block;position:absolute;cursor:pointer;}
        .jssora093 .c {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;}
        .jssora093 .a {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;}
        .jssora093:hover {opacity:.8;}
        .jssora093.jssora093dn {opacity:.6;}
        .jssora093.jssora093ds {opacity:.3;pointer-events:none;}

        /*jssor slider thumbnail skin 101 css*/
        .jssort101 .p {position: absolute;top:0;left:0;box-sizing:border-box;background:#000;}
        .jssort101 .p .cv {position:relative;top:0;left:0;width:100%;height:100%;border:2px solid #000;box-sizing:border-box;z-index:1;}
        .jssort101 .a {fill:none;stroke:#fff;stroke-width:400;stroke-miterlimit:10;visibility:hidden;}
        .jssort101 .p:hover .cv, .jssort101 .p.pdn .cv {border:none;border-color:transparent;}
        .jssort101 .p:hover{padding:2px;}
        .jssort101 .p:hover .cv {background-color:rgba(0,0,0,6);opacity:.35;}
        .jssort101 .p:hover.pdn{padding:0;}
        .jssort101 .p:hover.pdn .cv {border:2px solid #fff;background:none;opacity:.35;}
        .jssort101 .pav .cv {border-color:#fff;opacity:.35;}
        .jssort101 .pav .a, .jssort101 .p:hover .a {visibility:visible;}
        .jssort101 .t {position:absolute;top:0;left:0;width:100%;height:100%;border:none;opacity:.6;}
        .jssort101 .pav .t, .jssort101 .p:hover .t{opacity:1;}
    </style>
    <div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:960px;height:480px;overflow:hidden;visibility:hidden;background-color:#24262e;">
        <!-- Loading Screen -->
        <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
            <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="img/spin.svg" />
        </div>
        <div data-u="slides" class="slides" style="cursor:default;position:relative;top:0px;left:240px;width:720px;height:480px;overflow:hidden;">
            <div >
                <img id="first-image" data-u="image" src="img/img2.JPG" />
                <img id="first-image" data-u="thumb" src="img/img2.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img3.JPG" />
                <img data-u="thumb" src="img/img3.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img4.JPG" />
                <img data-u="thumb" src="img/img4.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img5.JPG" />
                <img data-u="thumb" src="img/img5.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img6.JPG" />
                <img data-u="thumb" src="img/img6.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img7.JPG" />
                <img data-u="thumb" src="img/img7.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img8.JPG" />
                <img data-u="thumb" src="img/img8.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img9.JPG" />
                <img data-u="thumb" src="img/img9.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img10.JPG" />
                <img data-u="thumb" src="img/img10.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img11.JPG" />
                <img data-u="thumb" src="img/img11.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img12.JPG" />
                <img data-u="thumb" src="img/img12.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img13.JPG" />
                <img data-u="thumb" src="img/img13.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img14.JPG" />
                <img data-u="thumb" src="img/img14.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img15.JPG" />
                <img data-u="thumb" src="img/img15.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img16.JPG" />
                <img data-u="thumb" src="img/img16.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img17.JPG" />
                <img data-u="thumb" src="img/img17.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img18.JPG" />
                <img data-u="thumb" src="img/img18.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img19.JPG" />
                <img data-u="thumb" src="img/img19.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img20.JPG" />
                <img data-u="thumb" src="img/img20.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img21.JPG" />
                <img data-u="thumb" src="img/img21.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img22.JPG" />
                <img data-u="thumb" src="img/img22.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img23.JPG" />
                <img data-u="thumb" src="img/img23.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img24.JPG" />
                <img data-u="thumb" src="img/img24.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img25.JPG" />
                <img data-u="thumb" src="img/img25.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img26.JPG" />
                <img data-u="thumb" src="img/img26.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img27.JPG" />
                <img data-u="thumb" src="img/img27.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img28.JPG" />
                <img data-u="thumb" src="img/img28.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img29.JPG" />
                <img data-u="thumb" src="img/img29.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img30.JPG" />
                <img data-u="thumb" src="img/img30.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img31.JPG" />
                <img data-u="thumb" src="img/img31.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img32.JPG" />
                <img data-u="thumb" src="img/img32.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img33.JPG" />
                <img data-u="thumb" src="img/img33.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img34.JPG" />
                <img data-u="thumb" src="img/img34.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img35.JPG" />
                <img data-u="thumb" src="img/img35.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img36.JPG" />
                <img data-u="thumb" src="img/img36.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img37.JPG" />
                <img data-u="thumb" src="img/img37.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img38.JPG" />
                <img data-u="thumb" src="img/img38.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img39.JPG" />
                <img data-u="thumb" src="img/img39.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img40.JPG" />
                <img data-u="thumb" src="img/img40.JPG" />
            </div>
            <div>
                <img data-u="image" src="img/img41.JPG" />
                <img data-u="thumb" src="img/img41.JPG" />
            </div>
            <a data-u="any" href="https://www.jssor.com" style="display:none">slider bootstrap</a>
        </div>
        <!-- Thumbnail Navigator -->
        <div data-u="thumbnavigator" class="jssort101" style="position:absolute;left:0px;top:0px;width:240px;height:480px;background-color:#000;" data-autocenter="2" data-scale-left="0.75">
            <div data-u="slides">
                <div data-u="prototype" class="p" style="width:99px;height:66px;">
                    <div data-u="thumbnailtemplate" class="t"></div>
                    <svg viewbox="0 0 16000 16000" class="cv">
                        <circle class="a" cx="8000" cy="8000" r="3238.1"></circle>
                        <line class="a" x1="6190.5" y1="8000" x2="9809.5" y2="8000"></line>
                        <line class="a" x1="8000" y1="9809.5" x2="8000" y2="6190.5"></line>
                    </svg>
                </div>
            </div>
        </div>
        <!-- Arrow Navigator -->
        <div data-u="arrowleft" class="jssora093" style="width:50px;height:50px;top:0px;left:270px;" data-autocenter="2">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                <polyline class="a" points="7777.8,6080 5857.8,8000 7777.8,9920 "></polyline>
                <line class="a" x1="10142.2" y1="8000" x2="5857.8" y2="8000"></line>
            </svg>
        </div>
        <div data-u="arrowright" class="jssora093" style="width:50px;height:50px;top:0px;right:30px;" data-autocenter="2">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                <polyline class="a" points="8222.2,6080 10142.2,8000 8222.2,9920 "></polyline>
                <line class="a" x1="5857.8" y1="8000" x2="10142.2" y2="8000"></line>
            </svg>
        </div>
    </div>
    <script type="text/javascript">jssor_1_slider_init();
    </script>`);
                $(".resume-section, .img-fluid").css(
                  "background",
                  "rgba(0,0,0,0.7)"
                );
                $(" html").css("background", "rgba(0,0,0,0.7)");
                $(".btn, .m-0, h2").hide();

                $(".gallery-image-container").show();
                $(document).keydown(function(e) {
                  // ESCAPE key pressed
                  if (e.keyCode == 27) {
                    $(".resume-section, .img-fluid").css("background", "white");
                    $(".btn, html").css("background", "white");
                    $(".gallery-image-container").hide();
                    $(".btn, .m-0, h2").show();
                  }
                });
                // Change First Image for slideshow when clicked
                const newSrc = $(this)
                  .parent()
                  .parent()
                  .find(".img-fluid")
                  .attr("src");

                $("#first-image").attr("src", newSrc);
              });
            });
          }
        } else {
          $(this)
            .find(".img-fluid")
            .removeClass("middle");
        }
      },
      // MOUSE OUT
      () => {
        $(this)
          .find(".img-fluid")
          .css("opacity", 1);
      }
    );
  });
})(jQuery); // End of use strict

const sendEmail = () => {
  const subject = "3910 Kinsale Road";
  const body = "Hi, I would like to make an appoitment to view the house.";

  window.open(`mailto:benaimjacob@gmail.com?subject=${subject}&body=${body}`);
};
