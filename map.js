let singapore = [28.147087, 64.909175];
let map = L.map('sg-map').setView(singapore, 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9vd2Fob28iLCJhIjoiY2trcWw3dWpkMGFqdDJ3cnY5M29qMDF6byJ9.xFD3OvZSt0hRMYT4DhwB9g'
}).addTo(map);

let sgLayer = L.markerClusterGroup()



async function getMarkers() {
    let response = await axios.get('markers_data.json')
    let cases=response.data.cases
    console.log(cases)
    let lat = parseFloat("")
    let lng = parseFloat("")
    for (let i of cases) {
        lat=i.lat
        lng=i.long

        markers = L.marker([lat,lng]);
        // markers.addTo(map);
        markers.bindPopup(`
        <div class="card" id='mapCards'>
            <div class='text-center'>
            <img src="${i.imgSource}" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text">Name: ${i.name}</p>
                <p class="card-text">Last seen: ${i.lastSeen}</p>
                <p class="card-text">Missing since: ${i.missingSince}</p>
                <div class='d-flex justify-content-between'>
                    <a href="${i.reportUrl}" class="btn btn-warning btn-sm text-dark px-3">Report</a>
                    <a href="${i.moreUrl}" class="btn btn-primary btn-sm text-light px-3">Read More</a>
                </div>
            </div>
        </div>
            
        `)
        markers.addTo(sgLayer)
    }
    
}
getMarkers()
sgLayer.addTo(map)
