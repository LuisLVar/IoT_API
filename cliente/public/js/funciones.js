const IP = 'http://www.luisvargasgt.com';
var peso = [];
var inclinacion = [];
var agua = [];
var luz = [];
var sonido = [];
var alarma = [];
var antirrobo = [];
var pasos = [];
var ritmo = [];

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [] //'1pm', '2pm', '2pm', '4pm', '5pm', '6pm', '7pm', '8pm'
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Mochila Inteligente'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Horario'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Data'
                }
            }]
        }
    }
});

//DATA PARA TOMAR FECHAS
function getdata() {
    $.get(IP + "/api/sensores/peso", function (data) {
        let tmp = data;
        console.log(data);
        console.log(myChart.data);
        if (myChart.data.labels.length == 0) {
            for (var i = 0; i < tmp.length; i++) {
                myChart.data.labels.push(tmp[i].FECHA);
                peso.push(tmp[i].PESOKG);
            }
        }
    });
    $.get(IP + "/api/sensores/inclinacion", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            inclinacion.push(tmp[i].INCLINACION);
        }
        console.log(inclinacion);
    });
    $.get(IP + "/api/sensores/agua", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            agua.push(tmp[i].AGUA);
        }
        console.log(agua);
    });
    $.get(IP + "/api/sensores/luz", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            luz.push(tmp[i].LUZ);
        }
        console.log(luz);
    });
    $.get(IP + "/api/sensores/sonido", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            sonido.push(tmp[i].SONIDO);
        }
        console.log(sonido);
    });
    $.get(IP + "/api/sensores/alarma", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            alarma.push(tmp[i].ESTADO);
        }
        console.log(alarma);
    });
    $.get(IP + "/api/sensores/antirrobo", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            antirrobo.push(tmp[i].ESTADO);
        }
        console.log("antirrobo");
        console.log(antirrobo);
    });
    $.get(IP + "/api/sensores/contador_pasos", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            pasos.push(tmp[i].PASOS);
        }
        console.log(pasos);
    });
    $.get(IP + "/api/sensores/ritmo_cardiaco", function (data) {
        let tmp = data;
        for (var i = 0; i < tmp.length; i++) {
            ritmo.push(tmp[i].RITMO);
        }
        console.log(ritmo);
    });
}


//FUNCIONES PARA EDITAR CHART
function addData(chart, label, position, data) {
    chart.data.labels.push(label);
    chart.data.datasets[position].data.push(data);
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function limpiarData(chart) {

    for (var i = 0; i < chart.data.datasets.length; i++) {
        chart.data.datasets.pop();
    }
    chart.data.datasets.pop();
    chart.update();
}

function newSensor(chart, data) {
    chart.data.datasets.push(data);
    chart.update();
}



//FUNCIONES ONCLICK
$('#btnAmpliar').click(function(){

    if($('#idChart').attr('class') == 'col-md-6'){
        $('#idChart').removeClass('col-md-6');
        $('#idChart').addClass('col-md-12');
    }else{
        $('#idChart').removeClass('col-md-12');
        $('#idChart').addClass('col-md-6');
    }


});


$('#btnPeso').click(function () {
    $.get(IP + "/api/sensores/peso", function (data) {
        var peso1 = {
            label: 'Peso (kg)',
            data: peso,
            backgroundColor: [
                '#0013ff',
            ],
            borderColor: [
                '#0013ff'
            ],
            //borderWidth: 1,
            fill: false
        }
        newSensor(myChart, peso1);
    });
});

$('#btnInclinacion').click(function () {
    var inclinacion1 = {
        label: 'Inclinacion (°)',
        data: inclinacion,
        backgroundColor: [
            '#00ffc9',
        ],
        borderColor: [
            '#00ffc9'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, inclinacion1);
});

$('#btnAgua').click(function () {
    var agua1 = {
        label: 'Agua (0|1)',
        data: agua,
        backgroundColor: [
            '#33ffe9',
        ],
        borderColor: [
            '#33ffe9'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, agua1);
});

$('#btnLuz').click(function () {
    var luz1 = {
        label: 'Luz',
        data: luz,
        backgroundColor: [
            '#ffdd33',
        ],
        borderColor: [
            '#ffdd33'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, luz1);
});

$('#btnSonido').click(function () {
    var sonido1 = {
        label: 'Sonido (db)',
        data: sonido,
        backgroundColor: [
            '#00FF00',
        ],
        borderColor: [
            '#00FF00'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, sonido1);
});

$('#btnAlarma').click(function () {
    var alarma1 = {
        label: 'Alarma (0|1)',
        data: alarma,
        backgroundColor: [
            '#ff7800',
        ],
        borderColor: [
            '#ff7800'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, alarma1);
});

$('#btnAntirrobo').click(function () {
    var antirrobo1 = {
        label: 'Antirrobo (0|1)',
        data: antirrobo,
        backgroundColor: [
            '#ff5500',
        ],
        borderColor: [
            '#ff5500'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, antirrobo1);
    alert("Antirrobo seleccionado.");
});

$('#btnPasos').click(function () {
    var pasos1 = {
        label: 'Pasos',
        data: pasos,
        backgroundColor: [
            '#e400ff',
        ],
        borderColor: [
            '#e400ff'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, pasos1);
});

$('#btnRitmo').click(function () {
    var ritmo1 = {
        label: 'Ritmo Cardiaco(p/s)',
        data: ritmo,
        backgroundColor: [
            '#ff0000',
        ],
        borderColor: [
            '#ff0000'
        ],
        //borderWidth: 1,
        fill: false
    }
    newSensor(myChart, ritmo1);
});

$('#btnLimpiar').click(function () {
    limpiarData(myChart);
});