$(document).ready(function(){

  $("#movieAutocomplete").keyup(function(){
   $("#suggest").html("");
   var input = $("#movieAutocomplete").val();

   input = $.trim(input);
   if(input)
   {
    $.ajax({
      url: "php/movieAuto.php",
      data: "input="+input,
      success: function( msg ) {
        $("#suggest").html(msg);
        $("#suggest ul li").mouseover(function(){
         $("#suggest ul li").removeClass("hover");
         $(this).addClass("hover");
       });

        $("#suggest ul li").click(function(){
          var value = $(this).html();
          $("#movieAutocomplete").val(value);
          $("#suggest ul").remove();
        });
      }
    });
  }
});
});   
var markers = [];
var map;
var movieName;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7141454, lng: -122.25},
    zoom: 9
  });
  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });   
}

var infoWindows = [];
function markerpoint(map,marker,contentString){

  var infowindow = new google.maps.InfoWindow({

    content: contentString

  });

  infowindow.open(map, marker);
  infoWindows[0] = infowindow;
}


function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
function deleteMarkers() {
  setMapOnAll(null);
  markers = [];
}
function addMarker(location,movieName,address) {
   var contentString =  '<h4 id="myAddress">'+""+address+'</h4>'+ 
  '<body>'+
  '<p id="movieName">'+"Movie Name: "+movieName+'</p>'
  '</body>';
    
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
 
  google.maps.event.addListener(marker, 'click', function() {

   closeInfowindow();
   markerpoint(map,marker,contentString);
 });
  markers.push(marker);
}


function closeInfowindow(){
  if(infoWindows.length > 0){
    infoWindows[0].set("marker",null);
    infoWindows[0].close();
    infoWindows.length = 0;
  }
}

function geocodeAddress(geocoder, resultsMap) {
  movieName = document.getElementById("movieAutocomplete").value;

  $.ajax({
    url: "php/movieAddress.php",
    data: "movieName="+movieName,
    success: function( msg ) {
      deleteMarkers();
      var Alladdress = JSON.parse(msg);
      var length =  Object.keys(Alladdress).length;
      var address;
      for(var i=0;i<length;i++)
      {
       if(Alladdress[i].Locations == "")
        {
          address = "San Francisco Bay Area";
        }
       else{
          address = Alladdress[i].Locations+", San Francisco Bay Area";
        }
        (function(myaddress) {
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            
            addMarker(results[0].geometry.location,movieName, myaddress);
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
          }
        });})(address);
      }
    }
  });
}
