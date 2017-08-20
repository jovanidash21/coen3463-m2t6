# Screw-IT
---

## Prerequisite
* [Node.js](https://nodejs.org/en/) installed.
* [Gmail API and OAuth 2.0 Credentials](http://masashi-k.blogspot.com/2013/06/sending-mail-with-gmail-using-xoauth2.html) registered. *Note: Follow Steps 2-4. 
* [Google Maps API](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true) registered.
* [MongoDB](https://www.mongodb.com/) installed.

## Installation
* Clone or download this repository.
```
git clone https://github.com/jovanidash21/screw-it.git
```
* Using a terminal or cmd, navigate to the project directory.
```
cd screw-it
```
* Install node modules.
```
npm install
```
* Start the MongoDB Server.
```
mongod
``` 
* Open another terminal or cmd and run mongo.
```
mongo
``` 
* Create a database locally using MongoDB on your computer.
```
use screw-it
``` 
* Insert to the database the JSON files inside the data folder of this project.
* Create a ```.env``` file. 
* Copy and paste the texts in ```.env.example``` to ```.env``` and insert the values for each environment variables.
* Open another terminal or cmd and run the project.
```
npm run build
```
* Open a browser and visit ```localhost:3000```.
* Run in dev mode.
```
npm run dev
```

## NPM Scripts
* ```npm start``` - start the server.
* ```npm run build``` - run the project in production mode.
* ```npm run dev``` - run the project in dev mode.

## Credits
- [Bootstrap Theme](https://freehtml5.co/preview/?item=bold-free-website-template-using-bootstrap)
- Images downloaded from Google

## Website
[Live Demo](https://screw-it-jovanidash21.herokuapp.com/)

## License
Licensed under [MIT](https://opensource.org/licenses/mit-license.php).