$(function() {
  //   //   dotenv.config();

  //   //   var GOOGLE_MAP_KEY = process.env.GOOGLE_API_KEY;

  //   //   function loadScript() {
  //   //     var script = document.createElement("script");
  //   //     script.type = "text/javascript";
  //   //     script.src =
  //   //       "https://maps.googleapis.com/maps/api/js?v=3" +
  //   //       "&key=" +
  //   //       GOOGLE_MAP_KEY +
  //   //       "&libraries=places&callback=initMap"; //& needed
  //   //     document.body.appendChild(script);
  //   //   }

  //   //   window.onload = loadScript;
  var dotenv = require("dotenv");
  dotenv.config();

  console.log(process.env.GOOGLE_API_KEY);
});
const map = "sada";
export default map;
