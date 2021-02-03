// const baseURL='https://newsapi.org/v2/everything?';
// async function displayNews(){
//     let response=await axios.get(baseURL+'qInTitle=missing&apiKey=e1ab834da5ee4901a89ce0b49183438b')
//     console.log(response.data)
// }
// displayNews()


const baseURL='https://gnews.io/api/v4/search?';
async function displayNews(){
    let response=await axios.get(baseURL+'q=missing&intitle&country=sg&lang=en&max=5&from=2020-01-03&token=2367a834a5cff85eb01076c66979ea53')
    console.log(response.data)
    document.querySelector('#news').innerHTML+=response.data
}
displayNews()