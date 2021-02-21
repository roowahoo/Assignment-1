const baseUrl2 = 'https://floating-forest-98452.herokuapp.com'

window.addEventListener('DOMContentLoaded', async ()=>{
    let response = await axios.get(baseUrl2 + '/reports');
    console.log(response.data);
    let cases = response.data;
    let displayCases=document.querySelector('#cases')
    for (let x of cases) {
        let eachCase=document.createElement('div')
        let html = `
        <div class="card m-3" id='caseCards' style="width: 18rem;">
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

// async function displayCases() {
//     let response = await axios.get(baseUrl2 + '/reports');
//     console.log(response.data);
//     let cases = response.data;

    

//     for (let x of cases) {
//         let html = `
//         <div class="card m-3" id='caseCards' style="width: 18rem;">
//         <div class="card-body">
//           <h2 class="card-title fw-bold pb-2">${x.name}</h2>
          
//               <p class='card-text fw-bold'>Date Last Seen:</p><p>${x.date}</p>
//               <p class='card-text fw-bold'>Location last seen:</p><p> ${x.location}</p>
//               <p class='card-text fw-bold'>Details:</p><p> ${x.details}</p>
//               <p class='card-text fw-bold'>Id:</p><p id='id'> ${x._id}</p>
//               <button onclick="deleteCase()">Delete</button>
          
//         </div>
//         </div>
//         `;
//         document.querySelector('#cases').innerHTML += html;

//         async function deleteCase() {
//         await axios.delete(`${baseUrl2}/report/${x._id}`)
//     }
//     }
    
// }
// displayCases()

function createCases() {
    document.querySelector('#submit_btn').addEventListener('click', async function () {
        let name = document.querySelector('#name').value
        let date = document.querySelector('#date').value
        let location = document.querySelector('#location').value
        let details = document.querySelector('#details').value

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