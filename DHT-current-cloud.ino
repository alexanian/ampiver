#include "Adafruit_DHT/Adafruit_DHT.h"
#include "EmonLib/EmonLib.h"                   

// Based on Adafruit_DHT example and EmonLib current_only example
#define DHTPIN 2     // what pin we're connected to
#define DHTTYPE DHT22		// DHT 22 (AM2302)

// Declare sensors using appropriate library
DHT dht(DHTPIN, DHTTYPE);
EnergyMonitor emon1;                          

// Declare variables to measure
float humi = 0.0;                   // Humidity from DHT22
float temp = 0.0;                   // Temperature from DHT22
char humi_str[10];                  // Cloud API can't send floats, need to transmit str
char temp_str[10];                  // Cloud API can't send floats, need to transmit str
double curr = 0.0;                  // Current from SCT103

void setup() {
    
    Spark.variable("temp", &temp_str, STRING);
    Spark.variable("humi", &humi_str, STRING);
    Spark.variable("curr", &curr, DOUBLE);

    Serial.begin(9600); 
    Serial.println("DHTxx test with current!");
    emon1.current(1, 30);           // Current: input pin, calibration.
    dht.begin();
}

void loop() {
// Wait a few seconds between measurements. 
delay(2000);

// Adafruit_DHT: reading temperature or humidity takes ~250 milliseconds!
// Sensor readings may also be up to 2 seconds 'old' (its a 
// very slow sensor)
    humi = dht.getHumidity();
	temp = dht.getTempCelcius();
// Check if any reads failed and exit early (to try again).
	if (isnan(humi) || isnan(temp)) {
		Serial.println("Failed to read from DHT sensor!");
		return;
   }
// EmonLib: RMS estimate of current over 1480 cycles
    curr = emon1.calcIrms(1480); 

    sprintf(humi_str,"%.2f",humi);
	Serial.print("Humid: "); 
	Serial.print(humi);
	Serial.print("% - ");
	Serial.print("Temp: "); 
    Serial.print(temp);
    Serial.print(" - Current: "); 
	Serial.println(curr);
	Serial.println(Time.timeStr());
}

