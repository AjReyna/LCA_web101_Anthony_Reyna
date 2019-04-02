
function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayPosition);
    }
     else {
         var myLocation = document.getElementById("my-coordinates");
         myLocation.innerHTML = "Not available";
     }
}
    function displayPosition(position) {
        var myLocation = document.getElementById("my-coordinates");
        myLocation.innerHTML = " Longitude: " + 
        position.coords.longitude + " Latitude: " + 
        position.coords.latitude;
    }

    //function displayError(err){
    //    var myLocation = document.getElementById('my-coordinates');
    //    myLocation.innerHTML = err;
    //}
    
