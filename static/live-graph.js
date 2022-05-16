// Create the chart
const chart = Highcharts.chart('container', {
    title: {
        text: 'CSV Data'
    },
    exporting: {
        enabled: true
    },
    yAxis: {
        crosshair: {
            label: {
                enabled: true,
                backgroundColor: 'green'

            },
            color: 'green'
        }
    },
    chart: {
        animation: {
            duration: 1
        }
    },
    series: [{
        name: 'y1',
        data: [],
        visible: true,
    }, {
        name: 'y2',
        data: [],
        visible: true,
    }, {
        name: 'y3',
        data: [],
        visible: true,
    }, {
        name: 'y4',
        data: [],
        visible: true,
    }]
});

setInterval(function () {

    fetch('/data.csv').then((response) => {
    
        return response.json();
    
    }).then((data) => {

        for (let ind = 0; ind < chart.series.length; ind++) {
            chart.series[ind].setData(data[ind])
        }
        chart.redraw();

    }).catch((err) => {

        // Do something for an error here
        console.log(err);

    });
    fetch('/text').then((response) => {
    
        return response.json();
    
    }).then((data) => {

        const displayText = `${data[0]} ${data[1]}`;
        document.getElementById("display-text").innerHTML = displayText;

    }).catch((err) => {

        // Do something for an error here
        console.log(err);

    });

}, 500);