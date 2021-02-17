async function loadData(){
    let response=await axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=bbfc1f9c-efea-4dab-a0cb-560d980079cc&q=murder')
    let series=response.data.result.records
    // console.log(series)

    function findTotals(series){
        return series.level_1=='Total Persons Arrested For Murder'
    }

    let filteredSeries=series.filter(findTotals)

    // console.log(filteredSeries)
    
    
    let valueArray=[]
    for (let object of filteredSeries){
        valueArray.push(object.value)
    }
    // console.log(valueArray)
    return valueArray

}
loadData()

async function loadYear(){
    let response=await axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=bbfc1f9c-efea-4dab-a0cb-560d980079cc&q=murder')
    let series=response.data.result.records

    function findTotals(series){
        return series.level_1=='Total Persons Arrested For Murder'
    }

    let filteredSeries=series.filter(findTotals)

    let yearArray=[]
    for(let object of filteredSeries){
        yearArray.push(object.year)
    }
    // console.log(yearArray)
    return yearArray


}
loadYear()


