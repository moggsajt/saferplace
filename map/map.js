/*
Share some global variables :)
*/
var maxLat = 59.34974799075751,
    maxLon = 18.08382315168274,
    minLat = 59.32939528178513,
    minLon = 18.03708834180725,
    maxBounds = L.bounds([maxLat, maxLon], [minLat, minLon]),
    map, eventPosition;

$(function () {
    console.log("ready in map.js");

    // Center map at BirgerJarl
    map = L.map('map').setView([59.3415587, 18.0643464], 15)
        .setMaxBounds(maxBounds);
    // Use GPS to center on device location
    //map.locate({ setView: true });

    /*
    map.on('click', function (e) {
        console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
        console.log("bounds ", map.getBounds());
    });
    */

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18,
    }).addTo(map);

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        //console.log("feature ", feature);
        //console.log("geo ", feature.geometry.coordinates);
        //L.marker(feature.geometry.coordinates).addTo(map).bindPopup("I am a green leaf.");

        if (feature.properties &&
            feature.properties.serviceTyp &&
            feature.properties.serviceTyp == 'civilProtectionSite') {
            layer.bindPopup(feature.properties.serviceLBA);
        } else if (feature.properties &&
            feature.properties.type &&
            feature.properties.type == 'event') {
            console.log("feature ", feature);
            layer.bindPopup(feature.properties.note).openPopup();
        }
    }

    var safeZone = {
        radius: 20,
        fillColor: "green",
        stroke: false,
        fillOpacity: 0.8
    };
    function getMSB(dataSet) {
        var url = '/api/msb/' + dataSet + '.json';
        $.getJSON(url, function (data) {
            L.geoJson(data, {
                pointToLayer: function (feature, latlng) {
                    var marker = L.circle(latlng, safeZone);
                    if (feature.properties &&
                        feature.properties.serviceTyp &&
                        feature.properties.serviceTyp == 'civilProtectionSite') {
                        // This is shelter
                        marker.bindPopup("<strong>Shelter</strong><br />" +
                            "Capacity: " + feature.properties.numberOfOc + "<br />" +
                            "Address: " + feature.properties.serviceLBA);
                    } else if (feature.properties &&
                        feature.properties.serviceTyp &&
                        feature.properties.serviceTyp == 'fireStation') {
                        // This is firestation
                        marker.bindPopup("<strong>Firestation</strong><br />" + feature.properties.note);
                    }
                    return marker;
                }
            }).addTo(map);
        });
    };
    getMSB('fireStation');
    getMSB('shelter');

    // Simulate event from potential future API at krismyndigheten
    var eventRadius = {
        radius: 100,
        fillColor: "red",
        color: "red",
        opacity: 1,
        fillOpacity: 0.25
    };

    $.getJSON('/api/krisinformation/event_1523691764.json', function (data) {
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                eventPosition = latlng;
                return L.circle(latlng, eventRadius, { pane: 'tooltipPane' }).bindPopup(feature.properties.html, { maxHeight: 300 }).openPopup();
            }
        }).addTo(map);
    });

});