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
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      if ($(window).width() <= 967)
        $(".bg-primary").css({
          top: 0,
          transition: "0.4s ease-out"
        });
    } else {
      if ($(window).width() <= 967) $(".bg-primary").css("top", "-60px");
    }
    prevScrollpos = currentScrollPos;
  };

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

  $(".scheduale").click(() => {
    // sendMandrillEmail();
    sendTheMail();
  });
})(jQuery); // End of use strict

const sendEmail = () => {
  const subject = "3910 Kinsale Road";
  const body = "Hi, I would like to make an appoitment to view the house.";

  window.open(`mailto:benaimjacob@gmail.com?subject=${subject}&body=${body}`);
};

function sendTheMail() {
  var m = new mandrill.Mandrill(EMAIL_KEY); // This will be public

  m.messages.send({
    message: {
      from_email: "jacob.benaim@icloud.com",
      from_name: "jay",
      to: [{ email: "benaimjacob@gmail.com", name: "jay" }], // Array of recipients
      subject: "3910 Kinsale Road",
      html: "Hi, I would like to make an appoitment to view the house."
      // text: "" // Alternatively, use the "html" key to send HTML emails rather than plaintext
    }
  });
}
const sendMandrillEmail = () => {
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      key: EMAIL_KEY,
      message: {
        from_email: "benaimjacob@gmail.com",
        to: [
          {
            email: "jacob.benaim@icloud.com",
            name: "David Pekar",
            type: "to"
          }
        ],
        autotext: "true",
        subject: "3910 Kinsale Road",
        html: "Hi, I would like to make an appoitment to view the house."
      }
    }
  })
    .done(function(response) {
      console.log(response); // if you're into that sorta thing
    })
    .catch(err => {
      console.log(err.responseJSON.message);
    });
};
