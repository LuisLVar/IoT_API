var x = new Chart(document.getElementById("myChart1"), {
    type: 'scatter',
    data: {
        datasets: [{
            backgroundColor: '#0013ff',
            label: "Test",
            data: [{
                x: 0,
                y: 5
            }, {
                x: 5,
                y: 10
            }, {
                x: 8,
                y: 5
            }, {
                x: 15,
                y: 0
            }],
        }]
    },
    options: {
        responsive: true
    }
});

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