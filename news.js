const baseUrl = 'https://gnews.io/api/v4/search?';
async function displayNews() {
    let response = await axios.get(baseUrl + 'q=murder%20singapore&country=sg&lang=en&max=5&from=2020-01-03&token=2367a834a5cff85eb01076c66979ea53')
    let articles = response.data.articles
    console.log(articles)

    // for (let a in articles) {
    //     let carousel = `
        
    //     `
    //     document.querySelector('#news').innerHTML = carousel
    // }

        let carousel =
            `<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">

        <div class="carousel-item active">
          <img src="${articles[0].image}" class="d-block w-100" alt="article-image">
          <div class="carousel-caption" >
            <div class='newsheading'>
            <a href=${articles[0].url}>
            <h2>${articles[0].title}</h2>
            </a>
            <h5 class='d-none d-md-block'>${articles[0].description}</h5>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="${articles[1].image}" class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <div class='newsheading'>
            <a href=${articles[1].url}>
            <h2>${articles[1].title}</h2>
            </a>
            <h5 class='d-none d-md-block'>${articles[1].description}</h5>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="${articles[2].image}" class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <div class='newsheading'>
            <a href=${articles[2].url}>
            <h2>${articles[2].title}</h2>
            </a>
            <h5 class='d-none d-md-block'>${articles[2].description}</h5>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="${articles[3].image}" class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <div class='newsheading'>
            <a href=${articles[3].url}>
            <h2>${articles[3].title}</h2>
            </a>
            <h5 class='d-none d-md-block'>${articles[3].description}</h5>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="${articles[4].image}" class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <div class='newsheading'>
            <a href=${articles[4].url}>
            <h2>${articles[4].title}</h2>
            </a>
            <h5 class='d-none d-md-block'>${articles[4].description}</h5>
            </div>
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

}
displayNews()


