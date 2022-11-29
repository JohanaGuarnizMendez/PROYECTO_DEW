window.addEventListener('load', function(){

    //UBICACION DE LA TIENDA
    
    var latitud = -12.04318;
    var longitud =  -77.02824;
    var map = L.map('map').setView([latitud, longitud], 15);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([latitud, longitud]).addTo(map);
    marker.bindPopup("<b>Hola esta es nuestra ubicación de la tienda.</b>  <br/>").openPopup();
    
    
    
    });
    