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
        markers.addTo(map);
        markers.bindPopup(`
            <div class="card" style="width: 18rem;">
            <img src="${i.imgSource}" class="card-img-top" alt="photo of missing boys">
            <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text">Name:${i.name}</p>
                <p class="card-text">Last seen:${i.lastSeen}</p>
                <p class="card-text">Missing since:${i.missingSince}</p>
                <div class='d-flex justify-content-between'>
                    <a href="${i.reportUrl}" class="btn btn-warning btn-sm text-dark px-3">Report</a>
                    <a href="${i.moreUrl}" class="btn btn-primary btn-sm text-light px-3">Read More</a>
                </div>
            </div>
        </div>
        `)
    }
}
getMarkers()


// let yachescortsmarker = L.marker([1.271557, 103.881497]);
// yachescortsmarker.addTo(map);
// yachescortsmarker.bindPopup(
//     `
//     <div class="card" style="width: 18rem;">
//         <img src="images/yacht.jpg" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Escorts on Yacht</h5>
//             <p class="card-text">Names and age: Yeng Yoke Fun, 22, Yap Me Leng, 22, Seetoh Tai Thim, 19, Margaret Ong Guat Choo, 19, Diana Ng Kum Yim, 24</p>
//             <p class="card-text">Last seen: The five young women were reported missing after supposedly attending a party on a cargo ship at the Eastern Anchorage</p>
//             <p class="card-text">Missing since: 20 Aug 1978</p>
//             <div class='d-flex justify-content-between'>
//                 <a href="https://eservices.police.gov.sg/content/policehubhome/homepage/police-report.html" class="btn btn-warning btn-sm text-dark">Report</a>
//                 <a href="https://www.asiaone.com/malaysia/appeal-called-reopen-40-year-old-case-5-missing-malaysians-and-singaporean-n-korea" class="btn btn-primary btn-sm text-light">Read More</a>
//             </div>
//         </div>
//     </div>`)

let meditationretreatmarker = L.marker([2.220737, 104.067713]);
meditationretreatmarker.addTo(map);
meditationretreatmarker.bindPopup(`
    <div class="card" style="width: 18rem;">
        <img src="images/pulausibu.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Meditation Retreat</h5>
            <p class="card-text">Name:Thomas Yeo </p>
            <p class="card-text">Last seen: Thomas was last seen by a local at Pulau Sibu Bersar where he had visited for a meditation retreat.</p>
            <p class="card-text">Missing since: 15 March 1994</p>
            <div class='d-flex justify-content-between'>
                <a href="https://eservices.police.gov.sg/content/policehubhome/homepage/police-report.html" class="btn btn-warning btn-sm text-dark">Report</a>
                <a href="https://www.youtube.com/watch?v=jJ13K41HUw4&ab_channel=MustShareNews" class="btn btn-primary btn-sm text-light">See More</a>
            </div>
        </div>
    </div>`)

let tinalimmarker = L.marker([1.3777523229355024, 103.73522970772244]);
tinalimmarker.addTo(map);
tinalimmarker.bindPopup(`
    <div class="card" style="width: 18rem;">
        <img src="images/tina.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Visit to Grandfather's House</h5>
            <p class="card-text">Name:Tina Lim Xin Ying</p>
            <p class="card-text">Last seen: Tina was last seen by her father at home when he suggested Tina to visit her sick grandfather. Tina never reached her grandfather's house.</p>
            <p class="card-text">Missing since: 22 June 2002</p>
            <div class='d-flex justify-content-between'>
                <a href="https://eservices.police.gov.sg/content/policehubhome/homepage/police-report.html" class="btn btn-warning btn-sm text-dark">Report</a>
                <a href="https://theindependent.sg/still-missing-choa-chu-kang-girl-who-left-to-visit-grandfather-in-2002/" class="btn btn-primary btn-sm text-light">See More</a>
            </div>
        </div>
    </div>`)

