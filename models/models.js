var mongojs = require('mongojs');
var tickets = "ticket";
var activities = "activity";
var students = "student";
var admins = "manager";
var seats = "seat";
var requests = "request";
var seat_modules = "seat_module";
var accesstoken = "accesstoken";

exports.tickets = tickets;
exports.activities = activities;
exports.students = students;
exports.admins = admins;
exports.seats = seats;
exports.requests = requests;
exports.seat_modules = seat_modules;
exports.accesstoken = accesstoken;

var dbUrl = 'mongodb://localhost/ticket';
if (process.env.NODE_ENV === 'test') {
    dbUrl = 'mongodb://localhost/test';
}

exports.db = mongojs(dbUrl, [tickets, activities, students, admins, seats, requests, seat_modules, accesstoken]);

exports.getIDClass=function(idValue)
{
    idValue=""+idValue;
    return mongojs.ObjectId(idValue);
}

exports.authIP = "101.200.233.45";
exports.authPort = 9003;
exports.authPrefix = "/v1";
