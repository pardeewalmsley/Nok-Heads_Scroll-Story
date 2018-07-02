// Add leaflet map

var map = L.map('map', {dragging: false}).setView([48.87, 2.3], 14);

L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://carto.com">CartoDB</a>',
    maxZoom: 18,
}).addTo(map);

map.scrollWheelZoom.disable();

// Down arrow

$('#arrow').click(function() {
  $('html, body').animate({
  scrollTop: $('#introduction').offset().top
}, 1000);
});

// Add slideshow maps waypoints

var mapOne = $('#supply').waypoint(function(direction) {
  if (direction === 'down') {
    $('#slideshowImageOne').toggleClass('transparent')
  }
  else {
    $('#slideshowImageOne').toggleClass('transparent')
  }
}, {
  offset: -300
});

var mapTwo = $('#supply').waypoint(function(direction) {
  if (direction === 'down') {
    $('#slideshowImageTwo').toggleClass('transparent')
  }
  else {
    $('#slideshowImageTwo').toggleClass('transparent')
  }
}, {
  offset: -600
});

var mapThree = $('#supply').waypoint(function(direction) {
  if (direction === 'down') {
    $('#slideshowImageThree').toggleClass('transparent')
  }
  else {
    $('#slideshowImageThree').toggleClass('transparent')
  }
}, {
  offset: -900
});

var mapFour = $('#supply').waypoint(function(direction) {
  if (direction === 'down') {
    $('#slideshowImageFour').toggleClass('transparent')
  }
  else {
    $('#slideshowImageFour').toggleClass('transparent')
  }
}, {
  offset: -1200
});

// Add Leaflet map waypoints

var stickyMap = new Waypoint.Sticky({
  element: $('.mapWrap')[0]
});

var mapIcon = L.icon({
    iconUrl: 'Images/map_icon.png',

    iconSize:     [10, 10], // size of the icon
    iconAnchor:   [6, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [5, 10] // point from which the popup should open relative to the iconAnchor
});

L.marker([48.870954, 2.311860], {icon: mapIcon}).addTo(map);

L.marker([48.870409, 2.317260], {icon: mapIcon}).addTo(map);

var christies = $('#demand').waypoint(function(direction) {
  if (direction === 'down') {
    L.popup()
      .setLatLng([48.870954, 2.311860])
      .setContent("<h1>Christie's:</h1>" + '<iframe src="https://www.youtube.com/embed/i3Gz1sj_8gc" width="300" height="240" frameborder="0"></iframe>')
      .openOn(map)
  }
  else {
    map.closePopup();
  }
});

var sothebys = $('#demand').waypoint(function(direction) {
  if (direction === 'down') {
    L.popup()
      .setLatLng([48.870409, 2.317260])
      .setContent("<h1>Sotheby's:</h1>" +'<iframe src="https://www.youtube.com/embed/fMcYFAKtgsU" width="300" height="240" frameborder="0"></iframe>')
      .openOn(map)
  }
  else {
    map.closePopup();
    L.popup()
      .setLatLng([48.870954, 2.311860])
      .setContent("<h1>Christie's:</h1>" +'<iframe src="https://www.youtube.com/embed/i3Gz1sj_8gc" width="300" height="240" frameborder="0"></iframe>')
      .openOn(map)
  }
}, {
  offset: -800
});

var fade = $('#demand').waypoint(function(direction) {
  if (direction === 'down') {
    $('#map').fadeOut(500);
  }
  else {
    $('#map').fadeIn(500);
  }
}, {
  offset: -1400
});
