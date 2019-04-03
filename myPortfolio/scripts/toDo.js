
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
    


    $(function() {

        let $list = document.getElementById('2do');
        let $newItemForm = $('#newItemForm');
        
        $newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input[type="text"]').val();
        $list.append(text);
        $('input[type="text"]').val('');
        });
        
        $list.on('click', 'li', function() {
        let $this = $(this);
        $this.remove();
        });
        
        });



