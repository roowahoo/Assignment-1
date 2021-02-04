// const baseURL='https://newsapi.org/v2/everything?';
// async function displayNews(){
//     let response=await axios.get(baseURL+'qInTitle=missing&apiKey=e1ab834da5ee4901a89ce0b49183438b')
//     console.log(response.data)
// }
// displayNews()


const baseURL = 'https://gnews.io/api/v4/search?';
async function displayNews() {
    let response = await axios.get(baseURL + 'q=missing%20person&country=sg&lang=en&max=5&from=2020-01-03&token=2367a834a5cff85eb01076c66979ea53')
    let articles=response.data.articles
    console.log(articles)
    for (let d of articles) {
        let template = `
        <ul class="list-unstyled">
            <li class="media">
                // <img class="mr-3" src="${d.image}" alt="Generic placeholder image">
                <div class="media-body">
                    <h1 class="mt-0 mb-1">${d.title}</h1>
                    <h2>${d.description}</h2>
                    <p>${d.content}</p>
                    
                    
                </div>
            </li>
        </ul>`
        document.querySelector('#news').innerHTML += template
    }
    
}
displayNews()