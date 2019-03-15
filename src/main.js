import $ from 'jquery';
import './input.scss';
import {dateString} from './backEnd.js';
import {getAge} from './../src/backEnd.js';
import {mercury} from './../src/backEnd.js';
import {venus} from './../src/backEnd.js';
import {mars} from './../src/backEnd.js';
import {jupiter} from './../src/backEnd.js';

$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    $(".info").text('');
    let month = $("#month").val();
    let day = $("#day").val();
    let year = $("#year").val();
    let newDate = dateString(month,day,year);
    const earthAge = getAge(newDate);
    const mercuryAge = mercury(earthAge);
    const venusAge = venus(earthAge);
    const marsAge = mars(earthAge);
    const jupiterAge = jupiter(earthAge);
    $(".info").append("<p> Your earth age is " + earthAge + ". </p><p> Your Mercury age is " + mercuryAge + ". </p><p> Your Venus age is " + venusAge +". </p><p> Your Mars age is " + marsAge +". </p><p> Your Jupiter age is " + jupiterAge + ". </p>")
    console.log(earthAge);
  });
});
