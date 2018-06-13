$(document).ready(function () {

    var entries = [ 
        { image: './assets/img/bubble-01.png', width: '70', height: '70',  target: '_top' },
        { image: './assets/img/bubble-02.png', width: '60', height: '60',  target: '_top' },
        { image: './assets/img/bubble-03.png', width: '30', height: '30',  target: '_top' },
        { image: './assets/img/bubble-04.png', width: '20', height: '20',  target: '_top' },
        { image: './assets/img/bubble-05.png', width: '40', height: '40',  target: '_top' },
        { image: './assets/img/bubble-06.png', width: '60', height: '60',  target: '_top' },
        { image: './assets/img/bubble-07.png', width: '40', height: '40',  target: '_top' },
        { image: './assets/img/bubble-09.png', width: '50', height: '50',  target: '_top' },
        { image: './assets/img/bubble-09.png', width: '40', height: '40',  target: '_top' }
    ];

    var settings = {
        entries: entries,
        width: 250,
        height: 250,
        bgColor: '#fff',
        fontColor: '#9298a4',
        speed: .5,
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        opacityOver: 1,
        opacityOut: .9
    }

    $('#cloud').svg3DTagCloud(settings);
});