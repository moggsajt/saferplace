$(function () {
  console.log("ready in mdb.js map is ", map);

  /*
  Some random datasets
  */
  function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }
  function createSamplePersons(count, color) {
    var i = 0, returnVal = [];
    for (i = 0; i < count; i++) {
      var lat = getRandomInRange(minLat, maxLat, 9);
      var lng = getRandomInRange(minLon, maxLon, 9);
      returnVal.push(L.circleMarker([lat, lng], { radius: 4, fillOpacity: 1, stroke: false, fillColor: color }).addTo(map));
    }
    return returnVal;
  }

  /*
  Some sample datasets
  */
  var persons = createSamplePersons(30, "blue");
  var medics = createSamplePersons(6, "purple");
  var volunteer = createSamplePersons(8, "orange");
  

  /*
  The API would be updated with the device location and we can simulte this with som randomness
  */
  function getRandomMovement() {
    return (Math.random() * (0.0001 - 0.000002) + 0.000002) * 1;
  }

  function moveAndRemove(whatArray, direction) {
    for (i = 0; i < whatArray.length; i++) {
      var lat = whatArray[i].getLatLng().lat;
      var lng = whatArray[i].getLatLng().lng;

      var latDirection = (lat < eventPosition.lat ? -1 : 1) * direction;
      var lngDirection = (lng < eventPosition.lng ? -1 : 1) * direction;
      var newLat = lat + (getRandomMovement() * latDirection);
      var newLng = lng + (getRandomMovement() * lngDirection);

      if (maxBounds.contains([newLat, newLng])) {
        whatArray[i].setLatLng([newLat, newLng]);
      } else {
        map.removeLayer(whatArray[i]);
        whatArray.splice(i, 1);
      }
    }
  }

  setInterval(function () {
    moveAndRemove(persons, 1);
    moveAndRemove(volunteer, -1);
    moveAndRemove(medics, -1);
  }, 1300);

});