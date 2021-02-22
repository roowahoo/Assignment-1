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
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
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

document.querySelector('#year').addEventListener('change', ()=> {
if (document.querySelector('#year').value == "eleven"){
    const eleven = new ApexCharts(document.querySelector("#genderPie"), optionsEleven);
    eleven.render();
}else if (document.querySelector('#year').value == "twelve") {
    const twelve = new ApexCharts(document.querySelector("#genderPie"), optionsTwelve);
    twelve.render();
}else if (document.querySelector('#year').value == "thirteen") {
    const thirteen = new ApexCharts(document.querySelector("#genderPie"), optionsThirteen);
    thirteen.render();
}else if (document.querySelector('#year').value == "fourteen") {
    const fourteen = new ApexCharts(document.querySelector("#genderPie"), optionsFourteen);
    fourteen.render();
}else if (document.querySelector('#year').value == "fifteen") {
    const fifteen = new ApexCharts(document.querySelector("#genderPie"), optionsFifteen);
    fifteen.render();
}else if (document.querySelector('#year').value == "sixteen") {
    const sixteen = new ApexCharts(document.querySelector("#genderPie"), optionsSixteen);
    sixteen.render();
}else if (document.querySelector('#year').value == "seventeen") {
    const seventeen = new ApexCharts(document.querySelector("#genderPie"), optionsSeventeen);
    seventeen.render();
}else if (document.querySelector('#year').value == "eighteen") {
    const eighteen = new ApexCharts(document.querySelector("#genderPie"), optionsEighteen);
    eighteen.render();
}else if (document.querySelector('#year').value == "nineteen") {
    const nineteen = new ApexCharts(document.querySelector("#genderPie"), optionsNineteen);
    nineteen.render();
}
})


const optionsEleven = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [28, 2],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsTwelve = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [16, 0],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsThirteen = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [25, 4],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsFourteen = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [19, 5],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsFifteen = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [14, 4],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsSixteen = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [37, 6],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsSeventeen = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [13, 1],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsEighteen = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [7, 2],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}

const optionsNineteen = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },

    'series': [21, 7],
    'labels': ['Male', 'Female'],
    'colors': ['#A7CECB', '#8BA6A9']
}



