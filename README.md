# JSON-bestand verwerken.

## Data
Maak een nieuw bestand aan met de naam vrienden.json.

Maak van de gegevens die je in data.js vindt een minified json-string en sla hem op in vrienden.json.

## Asynchroon inlezen van het JSON-bestand
Maak een bestand jsonScript.js waarin specifieke code rond JSON geschreven wordt.

### ShowArrayContent
Schrijf een function ShowContent, die als parameter het pad naar een JSON-bestand krijgt en eventueel de naam van de key die een array bevat.
De inhoud van elk element in de array wordt in de console getoond. 

Call deze methode om de vrienden uit het json-bestand te tonen in de console.

Surf in de browser naar http://api.icndb.com/jokes. Toon alle grapjes in de console via ShowArrayContent.

### GetJSON
#### In jsonScripts.js
Schrijf een function GetJSON die de data aanwezig in een json-bestand retourneert. Je zult hier asynchroon moeten werken en wachten op het resultaat van de operatie.

#### In script.js
Schrijf function die de vrienden ophaalt via GetJSON en die opslaag in de variabele vrienden.
Daarna worden de vrienden getoond in de select en de details getoond in de DOM-elementen.

Haal ook de grapjes op uit http://api.icndb.com/jokes en sla ze op in een array memes.
Doorlus deze array en toon elke meme in de console.




