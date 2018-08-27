displayMap=document.querySelector("#displayMap");
section=document.querySelector(".modal-body");
displayMap.onclick=function(e) {
    navigator.geolocation?navigator.geolocation.getCurrentPosition(success,fail):section.innerText="browser not support";
}
function success(position) {
    console.log(position);
latitude=position.coords.latitude;
longitude=position.coords.longitude;
accuracy=position.coords.accuracy;
time=position.timestamp;
let map =new google.maps.Map(section,{
    center:{lat:latitude,lng:longitude},
    zoom:17
})
let marker =new google.maps.Marker({
    map:map,
    position:{lat:latitude,lng:longitude}
})
}
function fail(e){
switch(e.code){
    case 1:section.innerText="PERMISSION DENIED"
    break;
    case 2:section.innerText="POSITION UNAVAILABLE"
    break;
    case 3:section.innerText="TIMEOUT"
    break;
    default:section.innerText="unknown error"
}}


