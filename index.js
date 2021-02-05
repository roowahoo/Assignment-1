let singapore = [1.3521, 103.8198];
let map = L.map('sg-map').setView(singapore, 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9vd2Fob28iLCJhIjoiY2trcWw3dWpkMGFqdDJ3cnY5M29qMDF6byJ9.xFD3OvZSt0hRMYT4DhwB9g'
}).addTo(map);

let mcdonaldmarker = L.marker([1.315206, 103.851742]);
mcdonaldmarker.addTo(map);
mcdonaldmarker.bindPopup(
    `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
)


let yachescortsmarker = L.marker([1.271557,103.881497]);
yachescortsmarker.addTo(map);
yachescortsmarker.bindPopup("<p>Eastern Anchorage</p>")

let meditationretreatmarker = L.marker([2.220737,104.067713]);
meditationretreatmarker.addTo(map);
meditationretreatmarker.bindPopup("<p>Pulau Sibu Besar</p>")

