function loadScript(url, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = callback;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function initMap() {
  const position = { lat: 49.415353406207494, lng: 6.136965485116145 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 17,
  });
  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "L'Elite Cut & Color by A.S",
  });
}
loadScript(
  // `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyAoSOJ2L9LyGLwiWv-aWMKHQbtv6XDOmco&callback=initMap`
);
