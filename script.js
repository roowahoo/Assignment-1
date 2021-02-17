const options = {
    chart: {
        'type': 'bar',
        'height': '100%'
    },
    series: [
        
    ],
    // xaxis:{
    //     categories:[2011,2012,2013,2014,2015,2016,2017,2018,2019]
    // },

    noData: {
        'text': 'Loading...'
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

window.addEventListener('DOMContentLoaded', async () => {
    let data = await loadData();
    chart.updateSeries([{
        'name': 'Total Murders',
        'data': data
    }])

    let year = await loadYear();
    chart.updateOptions({
        xaxis:{
        categories:year
    }
    })

})
