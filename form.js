const baseUrl2 = 'https://floating-forest-98452.herokuapp.com'

window.addEventListener('DOMContentLoaded', async ()=>{
    let response = await axios.get(baseUrl2 + '/reports');
    console.log(response.data);
    let cases = response.data;
    let displayCases=document.querySelector('#cases')
    for (let x of cases) {
        let eachCase=document.createElement('div')
        let html = `
        <div class="card m-3 caseCards" style="width: 18rem;">
        <div class="card-body">
        <p class='text-center'><i class="fas fa-thumbtack pin"></i></p>
          <h3 class="card-title fw-bold pb-2">${x.name}</h3>
          
              <p class='card-text fw-bold'>Date Last Seen:</p><p>${x.date}</p>
              <p class='card-text fw-bold'>Location last seen:</p><p> ${x.location}</p>
              <p class='card-text fw-bold'>Details:</p><p> ${x.details}</p>
              <div class='d-flex justify-content-end'>
              <button class="btn btn-danger mt-3 px-3" id='del_btn'>Delete</button>
              </div>
          
        </div>
        </div>
        `;
        eachCase.innerHTML += html;
        displayCases.appendChild(eachCase)
        
        eachCase.querySelector('#del_btn').addEventListener('click',async function(){
            await axios.delete(`${baseUrl2}/report/${x._id}`)
            location.reload()
        })

        
    }
})

let max = new Date();
// console.log(max)
let year = max.getFullYear() 
let month = max.getMonth() +1 

if (month < 10 ) {
    month = '0' + month  
}
let day = max.getDate() 
if (day < 10 ) {
    day = '0' + day
}
max = `${year}-${month}-${day}`
// console.log('Max: ' + max)
let date2 = `
        <label class='form-label'>Date last seen:</label>
            <input type='date' class='form-control' id='date' max='${max}' >
        ` 
document.querySelector('.date2').innerHTML = date2;

function createCases() {
    document.querySelector('#submit_btn').addEventListener('click', async function () {
        let name = document.querySelector('#name').value
        let date = document.querySelector('#date').value
        let location = document.querySelector('#location').value
        let details = document.querySelector('#details').value

        if (name=='' || date==''|| location==''|| details==''){
            alert('Please enter all fields')
        }

        let payload = {
            name: name,
            date: date,
            location: location,
            details: details
        }

        try {
            let response = await axios.post(baseUrl2 + '/report', payload);
            console.log(response)
            
    
        }
        catch (e) {
            alert('Failed to add case');
            console.log(e);
        }
        
    
    })
}
createCases()