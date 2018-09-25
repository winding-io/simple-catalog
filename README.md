React/Redux/Axios requesting simple Node APIRest: Phone catalog
=============

This application is a simple developer experiment that brings together diferent front tecnologies like React/Redux/Axios making request to the simplest APIRest developed in Node/ExpressJS.

The web application is telephone catalog which display them in a cards grid. You can see more detailed info by clicking on any of them.

The phones are in a .json file served from Node with Express.js, they are collected from React by Axios. 
The development of this application integrates the following technologies: 

```js

Front-end: React, Redux, Axios, Thunck
Back-end: Node

```

## Back-end installation:

Download the directory "api-rest". You'll need a node server installed to run the ApiREST.
Configure the ports in: app.js

```js
const front_port = 3000; //The front-end port
const back_port = 8000; //The back-end port 
```
You can add/remove phones editing the file: api-rest/phones.json 


Run: 

```js
node app.js
```

## Front-end installation:

Download the directory "phone-catalog" and run in the root directory:


src/modules/phones/actionCreators.js: line 3

```js

const API_URL = 'http://localhost:8000';

```
run: 

```sh
npm install
npm start
```
Loader Image by:

https://github.com/SamHerbert/SVG-Loaders








