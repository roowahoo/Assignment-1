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
    // for (let d of articles) {
        let carousel = 
        `<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${articles[0].image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${articles[0].title}</h5>
        <h2>${articles[0].description}</h2>
        <p>${articles[0].content}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${articles[1].image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${articles[1].title}</h5>
        <h2>${articles[1].description}</h2>
        <p>${articles[1].content}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${articles[2].image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${articles[2].title}</h5>
        <h2>${articles[2].description}</h2>
        <p>${articles[2].content}</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>`
    document.querySelector('#news').innerHTML = carousel
        // <ul class="list-unstyled">
        //     <li class="media">
        //         <img class="mr-3" src="${d.image}" alt="">
        //         <div class="media-body">
        //             <h1 class="mt-0 mb-1">${d.title}</h1>
        //             <h2>${d.description}</h2>
        //             <p>${d.content}</p>
        //             <p>${d.publishedAt}</p>
        //             <a class="btn btn-primary" href="${d.source.url}" role="button">Read More</a>
                    
                    
        //         </div>
        //     </li>
        // </ul>`
        
        
    // }
    
}
displayNews()