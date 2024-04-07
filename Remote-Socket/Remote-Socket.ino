#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>

const char* ssid = "Název_wifi_sítě";
const char* password = "Heslo_wifi_sítě";
const char* http_username = "uzivatel";
const char* http_password = "heslo";

ESP8266WebServer server(80);

const int relayPin = D1; // Pin, na kterém je připojeno relé

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

  server.on("/", HTTP_GET, handleRoot).setAuthentication(http_username, http_password);
  server.on("/on", HTTP_GET, handleOn).setAuthentication(http_username, http_password);
  server.on("/off", HTTP_GET, handleOff).setAuthentication(http_username, http_password);

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
