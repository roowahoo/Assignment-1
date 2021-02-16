const options = {
    chart: {
        'type': 'bar',
        'height': '100%'
    },
    series: [
        // {
        //     name: "Cases",
        //     data: [30,16,29,24,18,43,14,9,28]
        // }
    ],
    xaxis:{
        categories:[2011,2012,2013,2014,2015,2016,2017,2018,2019]
    },

    noData: {
        'text': 'Loading...'
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

window.addEventListener('DOMContentLoaded', async () => {
    let filteredSeries = await loadData();
    chart.updateSeries([{
        'name': 'Total Murders',
        'data': valueArray
    }])

})
