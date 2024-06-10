#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#define D1 5  // Define D1 as GPIO5

const char* ssid = "Zyxel_9DB1";
const char* password = "F47MBPJCF37QKTQN";

ESP8266WebServer server(80);

const int relayPin = 5; // Pin, na kterém je připojeno relé

void setup() {
    Serial.begin(115200);
    pinMode(relayPin, OUTPUT);
    digitalWrite(relayPin, LOW); // Zajisti, že relé je vypnuté při startu

    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi..");
    }
    Serial.println(WiFi.localIP());

    server.on("/", HTTP_GET, handleRoot);
    server.on("/on", HTTP_GET, handleOn);
    server.on("/off", HTTP_GET, handleOff);

    server.begin();
    Serial.println("HTTP server started");
}

void loop() {
    server.handleClient();
}

void handleRoot() {
    server.send(200, "text/plain", "Hello from ESP8266!");
}

void handleOn() {
    digitalWrite(relayPin, HIGH); // Zapne relé
    server.send(200, "text/plain", "Zásuvka zapnuta");
}

void handleOff() {
    digitalWrite(relayPin, LOW); // Vypne relé
    server.send(200, "text/plain", "Zásuvka vypnuta");
}
