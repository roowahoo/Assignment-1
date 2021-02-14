async function loadData(){
    let response=await axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=bbfc1f9c-efea-4dab-a0cb-560d980079cc&q=murder')
    let series=response.data
    return series
}