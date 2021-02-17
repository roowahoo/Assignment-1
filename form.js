const baseUrl2 = 'https://floating-forest-98452.herokuapp.com'

async function displayCases() {
    let response = await axios.get(baseUrl2 + '/reports');
    console.log(response.data);
    let cases = response.data;

    for (let x of cases) {
        let html = `
        <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          
              <p class='card-text'>Date Last Seen: ${x.date}</p>
              <p class='card-text'>Location last seen: ${x.location}</p>
              <p class='card-text'>Details: ${x.details}</p>
          
        </div>
        </div>
        `;
        document.querySelector('#cases').innerHTML += html;
    }
}
displayCases()

function createCases(){
    document.querySelector('#submit_btn').addEventListener('click', async function(){
        let name=document.querySelector('#name').value
        let date=document.querySelector('#date').value
        let location = document.querySelector('#location').value
        let details = document.querySelector('#details').value

        let payload={
            name:name,
            date:date,
            location: location,
            details: details
        }

        try{
            let response=await axios.post(baseUrl2 + '/report', payload);
            console.log(response)
        }
        catch (e){
            alert('Failed to add case');
            console.log(e);
        }
    })
}
createCases()