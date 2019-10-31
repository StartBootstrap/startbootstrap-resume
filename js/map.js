var map;
function initMap() {
  let zoom = 0;
  if ($(window).width() <= 768) {
    zoom = 13;
  } else {
    zoom = 14.8;
  }
  var flag =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  var schoolIcon = "img/school.png";
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.943199, lng: -79.029774 },
    zoom: zoom
  });

  var homeMarker = new google.maps.Marker({
    position: { lat: 43.943199, lng: -79.029774 },
    map: map,
    animation: google.maps.Animation.DROP,
    title: "3910 Kinsale Road"
  });

  var schoolMarker = new google.maps.Marker({
    position: { lat: 43.93956, lng: -79.017323 },
    map: map,
    animation: google.maps.Animation.DROP,
    icon: schoolIcon,
    title: "school"
  });

  // var kmlLayer = new google.maps.KmlLayer({
  //   url:
  //     "",
  //   suppressInfoWindows: true,
  //   map: map
  // });

  // kmlLayer.addListener("click", function(kmlEvent) {
  //   var text = kmlEvent.featureData.name;
  //   var description = kmlEvent.featureData.description;
  //   console.log(text);

  //   showInContentWindow(text, description);
  // });

  function showInContentWindow(text, desc) {
    var title = $("#content-title");
    var des = $("#content-desc");
    title.text(text);
    des.text(desc);
  }
}
