// Custom JS to make status descriptions appear as a pretty overlay using Vex
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

$(document).ready( function() {
    $('#sensor-status').click(showStatusDetails);
});