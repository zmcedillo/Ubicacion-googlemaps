function iniciarMap(){
    var latitud = 25.7264108;
    var longitud = -100.3140925;

    coordenadas = {
        lng: longitud,
        lat: latitud
    }

    generarMap(coordenadas);
}

function generarMap(coordenadas){
    var mapa = new google.maps.Map(document.getElementById("mapa"),
    {
        zoom: 15,
        center: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    marcador = new google.maps.Marker({
        map: mapa,
        draggable: true,
        position: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    marcador.addListener('dragend',function(event){
        document.getElementById("latitud").value = this.getPosition().lat();
        document.getElementById("longitud").value = this.getPosition().lng();
    })
}