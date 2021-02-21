const options = {
    chart: {
        'type': 'bar',
        'height': '100%'
    },
    plotOptions: {
        bar: {
            distributed: true,
        }
    },
    legend:{
        show:false
    },
    dataLabels:{
        enabled:false
    },
    series: [],
    fill: {
        colors: ['#413C58', '#6D7188', '#8F9EA3', '#A3C4BC', '#B1CEB9', '#BFD7B5', '#E7EFC5', '#EDE6B5', '#F2DDA4']
    },
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
        xaxis: {
            categories: year
        }
    })

})


