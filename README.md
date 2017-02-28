# Software Engineering - Module Two - Express
---

## Screenshot
<p align="center">
  <img src="https://raw.githubusercontent.com/jovanidash21/coen3463-m2t6/master/screenshot.png">
</p>

## Prerequisite
* [Node.js](https://nodejs.org/en/) installed.
* [Gmail API and OAuth 2.0 Credentials](http://masashi-k.blogspot.com/2013/06/sending-mail-with-gmail-using-xoauth2.html) registered. *Note: Follow Steps 2-4. 
* [Google Maps API](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true) registered.
* [MongoDB](https://www.mongodb.com/) installed.

## Installation
* Clone or download this repository.
```
git clone https://github.com/jovanidash21/coen3463-m2t6.git
```
* Open routes/contact.js and replace ```process.env.CLIENT_ID```, ```process.env.CLIENT_SECRET```, and ```process.env.REFRESH_TOKEN``` with ```'{YOUR_CLIENT_ID}'```, ```'{YOUR_CLIENT_SECRET}'```, and ```'{YOUR_REFRESH_TOKEN}'``` respectively.
* On the same file, replace ```process.env.GOOGLE_MAPS_API``` with ```'https://maps.googleapis.com/maps/api/js?key={YOUR_GOOGLE_MAPS_API_KEY}&sensor=false'```
* Using a terminal or cmd, navigate to the project directory.
```
cd coen3463-m2t6
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
* Open app.js and replace ```process.env.MONGODB_URI``` with ```'mongodb://localhost:27017/screw-it'```.
* Open another terminal or cmd and run 'www' file inside the bin directory.
```
node ./bin/www
```
* Open a browser and visit ```localhost:3000```.

## Credits
- [Bootstrap Theme](https://freehtml5.co/preview/?item=bold-free-website-template-using-bootstrap)
- Images downloaded from Google

## Connect
- [Wordpress](https://jovaniwarguez.wordpress.com/)
- [Facebook](https://facebook.com/jovani.cadornawarguez)
- [Twitter](https://twitter.com/jovanidash21)
- [Instagram](https://www.instagram.com/jovanidash21/)
- [Google+](https://plus.google.com/u/0/104385173780051504413)
- [LinkedIn](https://www.linkedin.com/in/jovani-warguez-827a8a11b?trk=nav_responsive_tab_profile_pic)
- [YouTube](https://www.youtube.com/channel/UCNiVxhbJ6Ku9keIjkQX3RRQ)
- [CodePen](http://codepen.io/jovanidash21/)
