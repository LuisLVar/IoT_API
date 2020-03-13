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

var myChart = new Chart(document.getElementById("myChart1"), {
    type: 'scatter',
    data: {
        datasets: [{
            backgroundColor: '#0013ff',
            label: "Relacion",
            data: []
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Relacion entre datos'
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
                    labelString: 'X'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Y'
                }
            }]
        }
    }
});

function getdata() {
    $.get(IP + "/api/sensores/peso", function (data) {
        let tmp = data;
        console.log(data);
        console.log(myChart);
        for (var i = 0; i < tmp.length; i++) {
            peso.push(tmp[i].PESOKG);
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

//FUNCIONES ONCLICK
$('#btnAmpliar').click(function () {

    if ($('#idChart').attr('class') == 'col-md-6') {
        $('#idChart').removeClass('col-md-6');
        $('#idChart').addClass('col-md-12');
    } else {
        $('#idChart').removeClass('col-md-12');
        $('#idChart').addClass('col-md-6');
    }
});

$('#btnGenerar').click(function () {
    var x = $('#ejeX').text();
    var y = $('#ejeY').text();
    console.log(x + ', ' + y);
    var tmp = [];
    if (x == 'Peso') {
        tmp = peso;
    } else if (x == 'Inclinacion') {
        tmp = inclinacion;
    }
    else if (x == 'Agua') {
        tmp = agua;
    }
    else if (x == 'Luz') {
        tmp = luz;
    }
    else if (x == 'Sonido') {
        tmp = sonido;
    }
    else if (x == 'Alarma') {
        tmp = alarma;
    }
    else if (x == 'Antirrobo') {
        tmp = antirrobo;
    }
    else if (x == 'Pasos') {
        tmp = pasos;
    }
    else if (x == 'Ritmo Cardiaco') {
        tmp = ritmo;
    } else {
        alert('Selecciona ambos ejes.');
        return;
    }
    var tmp2 = [];
    if (y == 'Peso') {
        tmp2 = peso;
    } else if (y == 'Inclinacion') {
        tmp2 = inclinacion;
    }
    else if (y == 'Agua') {
        tmp2 = agua;
    }
    else if (y == 'Luz') {
        tmp2 = luz;
    }
    else if (y == 'Sonido') {
        tmp2 = sonido;
    }
    else if (y == 'Alarma') {
        tmp2 = alarma;
    }
    else if (y == 'Antirrobo') {
        tmp2 = antirrobo;
    }
    else if (y == 'Pasos') {
        tmp2 = pasos;
    }
    else if (y == 'Ritmo Cardiaco') {
        tmp2 = ritmo;
    } else {
        alert('Selecciona ambos ejes.');
        return;
    }

    console.log(peso.length);
    for (var i = 0; i < peso.length; i++) {
        let coordenada = { x: tmp[i], y: tmp2[i] };
        console.log(coordenada);
        myChart.data.datasets[0].data.push(coordenada);
    }
    myChart.options.scales.xAxes[0].scaleLabel.labelString = x;
    myChart.options.scales.yAxes[0].scaleLabel.labelString = y;
    myChart.data.datasets[0].label = x+' vs '+y;
    myChart.update();

});



//FUNCIONES ONCLICK - EJE X
$('#btnPeso').click(function () {
    $('#ejeX').html("Peso");
});


$('#btnInclinacion').click(function () {
    $('#ejeX').html("Inclinacion");
});

$('#btnAgua').click(function () {
    $('#ejeX').html("Agua");
});

$('#btnLuz').click(function () {
    $('#ejeX').html("Luz");
});

$('#btnSonido').click(function () {
    $('#ejeX').html("Sonido");
});

$('#btnAlarma').click(function () {
    $('#ejeX').html("Alarma");
});

$('#btnAntirrobo').click(function () {
    $('#ejeX').html("Antirrobo");
});

$('#btnPasos').click(function () {
    $('#ejeX').html("Pasos");
});

$('#btnRitmo').click(function () {
    $('#ejeX').html("Ritmo Cardiaco");
});

//FUNCIONES EJE Y 

$('#btnPesoY').click(function () {
    $('#ejeY').html("Peso");
});


$('#btnInclinacionY').click(function () {
    $('#ejeY').html("Inclinacion");
});

$('#btnAguaY').click(function () {
    $('#ejeY').html("Agua");
});

$('#btnLuzY').click(function () {
    $('#ejeY').html("Luz");
});

$('#btnSonidoY').click(function () {
    $('#ejeY').html("Sonido");
});

$('#btnAlarmaY').click(function () {
    $('#ejeY').html("Alarma");
});

$('#btnAntirroboY').click(function () {
    $('#ejeY').html("Antirrobo");
});

$('#btnPasosY').click(function () {
    $('#ejeY').html("Pasos");
});

$('#btnRitmoY').click(function () {
    $('#ejeY').html("Ritmo Cardiaco");
});