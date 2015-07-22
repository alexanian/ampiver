// Custom JS for Ampiver UI

/*
// VEX
// Make status descriptions appear as a pretty overlay using Vex
*/
vex.defaultOptions.className = 'vex-theme-flat-attack';
function showStatusDetails() {
    vex.dialog.alert(
    '<h3>Sensor Modes</h3>\n' +
    '<div class="pull-left standby status-circle">' +
    '<div class="status-container"><div class="status-content"><span class="glyphicon glyphicon-time" ' +
    'aria-hidden="true"></span></div></div>\n    </div>' +
    '<p><strong>Standby</strong> indicates that temperature and humidity are outside the range where there is risk' +
    ' of ice accretion.</p> \n' +
    '<div class="pull-left icing-risk status-circle">' +
    '<div class="status-container"><div class="status-content"><span class="glyphicon glyphicon-tint" ' +
    'aria-hidden="true"></span></div></div>\n    </div>' +
    '<p><strong>Icing Risk</strong> indicates that temperature and humidity are in the range where there is risk of' +
    ' ice accretion.</p> \n' +
    '<p></p> \n' +
    '<div class="pull-left icing-event status-circle">' +
    '<div class="status-container"><div class="status-content"><span class="glyphicon glyphicon-asterisk" ' +
    'aria-hidden="true"></span></div></div>\n    </div>' +
    '<p><strong>Icing Event</strong> indicates that ice has been detected on the sensor. Time to begin de-icing' +
    ' efforts!</p> \n' +
    '<div class="pull-left no-current status-circle">' +
    '<div class="status-container"><div class="status-content"><span class="glyphicon glyphicon-warning-sign" ' +
    'aria-hidden="true"></span></div></div>\n    </div>' +
    '<p><strong>No Current</strong> indicates that no current is being detected and the sensor is' +
    ' running on reserve power. Check the station!</p> \n');
}

/*
// SPARK
// Communicate with the Spark Core
*/
function getSparkVariables() {
    var deviceID = "54ff6a066672524849231267";;
    var accessToken = "6426d7cefc253a5cc13db176fa7990cdb7f1d122";
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