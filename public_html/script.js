
var mapid = L.map('mapid').setView([-29.713017, -55.523313], 10);

var osm =L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    });

//////////// PARTE 01-ENTRADA PRINCIPAL //////////////

osm.addTo(mapid);

var marker = L.marker([-29.708791, -55.526165],{
    draggable:true,
    title:"PONTO 01 - PREDIO PRINCIPAL -SIGA PARA O PONTO 02",
    opacity:0.5,

} )

.addTo(mapid)
.bindPopup("<h1>BEM-VINDO AO IFFAR</hl> <p>Entrada Principal </p> <img src='./img/predio principalxx.jpg'/><audio preload='metadata' autoplay controls loop muted src='./audio/audio-predio principal.ogg'></audio>"); 

//////////// PARTE 02-REFEITORIO //////////////// 

osm.addTo(mapid);

var marker = L.marker([-29.707882, -55.527250],{
    draggable:true,
    title:"PONTO 02-REFEITORIO- SIGA PARA O PONTO 03",
    opacity:0.5,

} )

.addTo(mapid)
.bindPopup("<h1></hl><p> Refeitório </p> <img src='./img/refeitorio05.jpg'/><audio preload='metadata' autoplay controls loop muted src='./audio/audio-refeitorio.ogg'></audio>"); 

///////////// PARTE 03-PRÉDIO CURSOS SUPERIORES   ////////////

osm.addTo(mapid);

var marker = L.marker([-29.708471, -55.527850],{
    draggable:true,
    title:"PONTO 04- PREDIO CURSOS SUPERIORES-SIGA PARA O PONTO 05",
    opacity:0.5,

} )

.addTo(mapid)

.bindPopup("<h1></hl><p>Prédio Novo </p> <img src='./img/superiores05.jpg'/> <audio preload='metadata' autoplay controls loop muted src='./audio/audio-curso superiores.ogg'></audio>"); 

///////////// PARTE 4-GINASIO ////////////////////

osm.addTo(mapid);

var marker = L.marker([-29.708226, -55.527752],{
    draggable:true,
    title:"PONTO 03-GINASIO DE ESPORTES- SIGA PARA O PONTO 04",
    opacity:0.5,

  
} )

.addTo(mapid).bindPopup("<h1></hl><p> Ginásio </p> <img src='./img/ginasio01.jpg'/> <audio preload='metadata' autoplay controls loop muted src='./audio/audio-ginasio.ogg'></audio>");

///////////// PARTE 05-PRÉDIO ADS /////////////////

osm.addTo(mapid);

var marker = L.marker([-29.708826, -55.529085],{
    draggable:true,
    title:"PONTO 05-PREDIO ADS-PONTO FINAL",
    opacity:0.5,

} )

.addTo(mapid)
.bindPopup("<h1></hl><p>Centro de Informática</p> <img src='./img/imagen03.jpg'/><audio preload='metadata' autoplay controls loop muted src='./audio/audio-lab informatica.ogg'></audio>"); 
