let singapore = [ 1.3521,103.8198]; // #1 Singapore latlng
let map = L.map('sg-map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9vd2Fob28iLCJhIjoiY2trcWw3dWpkMGFqdDJ3cnY5M29qMDF6byJ9.xFD3OvZSt0hRMYT4DhwB9g' //demo access token
}).addTo(map);

let mcdonaldmarker = L.marker([1.314,103.852]);
mcdonaldmarker.addTo(map);
mcdonaldmarker.bindPopup("<p>Owen Road</p>")

let yachescortsmarker = L.marker([15.038,51.766]);
yachescortsmarker.addTo(map);
yachescortsmarker.bindPopup("<p>Eastern Anchorage</p>")

