const express = require('express');   //to import express
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser=require('cookie-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 8765;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: 'http://localhost:3000'}));

// parse request data content type application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded


// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

// import user routes
const loginRoutes = require('./src/routes/login.route.js');
app.use('/login', loginRoutes);


//alexandra
const userRoutes = require('./src/routes/user.route');
app.use('/evcharge/api/admin', userRoutes);

const vehicleRoutes = require('./src/routes/vehicle.route');
app.use('/evcharge/api/vehicle', vehicleRoutes);

const chargingDataRoutes = require('./src/routes/chargingData.route');
app.use('/evcharge/api/charging', chargingDataRoutes);


//polyanna
const sessions_per_point_Routes= require('./src/routes/sessions_per_point.route');
app.use('/evcharge/api/SessionsPerPoint', sessions_per_point_Routes);

const  healthcheck_Routes=require('./src/routes/healthcheck.route');
app.use('/evcharge/api/admin', healthcheck_Routes);


const sessions_per_manufacturer_Routes=require('./src/routes/sessions_per_manufacturer.route');
app.use('/evcharge/api/SessionsPerManufacturer', sessions_per_manufacturer_Routes);

const energy_cost_Routes=require('./src/routes/energy_cost.route');
app.use('/evcharge/api/EnergyCost', energy_cost_Routes);


//stamatis
const sessions_per_Provider_Routes= require('./src/routes/sessions_per_provider.route');
app.use('/evcharge/api/SessionsPerProvider', sessions_per_Provider_Routes);

const resetSessions = require('./src/routes/resetsessions.route');
app.use('/evcharge/api/admin', resetSessions);


//stela
const stationinfoRoutes = require('./src/routes/stationInfo.router');
app.use('/evcharge/api/stationInfo',stationinfoRoutes);

const sessions_per_EV_Routes= require('./src/routes/sessions_per_EV.route');
app.use('/evcharge/api/SessionsPerEV', sessions_per_EV_Routes);

const closestStationsRoutes = require('./src/routes/closestStation.route');
app.use('/evcharge/api/ClosestStations', closestStationsRoutes);


// listen to the port
app.listen(port, ()=>{
    console.log(`Express Server is running at port ${port}`);
});
