// Custom JS to read variables from Spark Core
/*
// SPARK
// Communicate with the Spark Core
*/
function getSparkVariables() {
    var deviceID = "54ff6a066672524849231267";;
    var accessToken = "6426d7cefc253a5cc13db176fa7990cdb7f1d122"; // Access token expires August 1 2015
    var varName = "temp_str";

        requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 document.getElementById("temp-readout").innerHTML = json.result;
                 });
    }, 10000);
}

$(document).ready( function() {
    $('#current-status').click(showStatusDetails);
    
    /* Read all 3 values (humidity, temperature, current) from the Spark Core every 2s 
    window.setInterval(getSparkVariables(), 2000);*/

});