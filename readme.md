# Einrichtung des Servers
Dieser Server kann Daten im JSON formart speichern und ausgeben.
Über die URL "https://localhost:5600/api/todo" können über einen GET-Request daten abgerufen und über einen POST-Request gespeichert werden. Die Daten sind in dem Verzeichnis /data in der data todo.json gespeichert.

Verwende das Projekt "Vue.js Einstieg (save data)" als Frontend.

1. Im Terminal "node -v" eingeben
2. Wenn eine Fehler ausgegeben wird, ist node.js nicht installiert
   1. Dann solltest du unter folgendem Link node.js downloaded und installieren
      https://nodejs.org/en/
   2. Im Terminal "node -v" eingeben um zu prüfen ob die Installation erfolgreich war
3. Öffne das Verzeichnis des Servers im Terminal
4. Führe den Befehl "npm install" aus
5. Führe den Befehl "npm run start" aus
6. Nun sollte eine URL ausgegeben werden, unter dem die daten abrufbar sind

