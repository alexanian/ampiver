// Custom JS to read variables from Spark Core
/*
// SPARK
// Communicate with the Spark Core
*/
var deviceID = "54ff6a066672524849231267";
var accessToken = "6426d7cefc253a5cc13db176fa7990cdb7f1d122"; // Access token expires August 1 2015

window.setInterval(function() {
    requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/humi/?access_token=" + accessToken;
    $.getJSON(requestURL, function(json) {
                 $("#humi-readout").innerHTML = json.result;
                 });
    setSensorMode();
}, 2000);   
window.setInterval(function() {
    requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/curr/?access_token=" + accessToken;
    $.getJSON(requestURL, function(json) {
                 $("#curr-readout").innerHTML = json.result;
                 });
    setSensorMode();
}, 2000);   
window.setInterval(function() {
    requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/tmpr/?access_token=" + accessToken;
    $.getJSON(requestURL, function(json) {
                 $("#tmpr-readout").innerHTML = json.result;
                 });
    setSensorMode();
}, 2000);

// Set mode - probably could be made more efficient
function setSensorMode() {
    curr = parseFloat($("#curr-readout").innerHTML);
    tmpr = parseFloat($("#tmpr-readout").innerHTML);
    console.log($("#curr-readout"));
    console.log(curr);
    console.log(tmpr);

    // Remove sensor status class
    $("#sensor-status").removeClass( "standby no-current icing-risk icing-event" )
    
    if (curr < 0.05) { // no current mode
        $("#sensor-status").addClass( "no-current" );
        alert(curr);
    } else if (tmpr < -40.0 || tmpr > 0.0 ) { // standby mode - really ought to also check humidity
        $("#sensor-status").addClass( "standby" );
    } else { // icing-risk mode; icing-event not implemented since QCM does not transmit data
        $("#sensor-status").addClass( "icing-risk" );
    }
}