import $ from 'jquery';
import './input.scss';
import {dateString} from './backEnd.js';
import {getAge} from './../src/backEnd.js';
import {mercury} from './../src/backEnd.js';
import {venus} from './../src/backEnd.js';
import {mars} from './../src/backEnd.js';
import {jupiter} from './../src/backEnd.js';
import {genderLife} from './../src/backEnd.js';
import {answer} from './../src/backEnd.js';

$(document).ready(function() {
  $(".info").hide();
  $(".form").submit(function(event) {
    event.preventDefault();
    $(".info").text('');
    let month = $("#month").val();
    let day = $("#day").val();
    let year = $("#year").val();
    let newDate = dateString(month,day,year);
    const earthAge = getAge(newDate);
    console.log(earthAge);
    if (earthAge === "invalid") {
      $(".info").append("<h5 class='hide'>Hide</h5><p>You have entered a invalid birthday. Please try again.");
      return;
    }
    const mercuryAge = mercury(earthAge);
    const venusAge = venus(earthAge);
    const marsAge = mars(earthAge);
    const jupiterAge = jupiter(earthAge);
    let gender = $('input[name="gender"]:checked').val();
    const earthEx = genderLife(gender);
    const mercuryEx = mercury(earthEx);
    const venusEx = venus(earthEx);
    const marsEx = mars(earthEx);
    const jupiterEx = jupiter(earthEx);
    let eLeft = answer(earthEx - earthAge);
    let mLife = answer(mercuryEx - mercuryAge);
    let vLife = answer(venusEx - venusAge);
    let marsLife = answer(marsEx - marsAge);
    let jLife = answer(jupiterEx - jupiterAge);
    console.log(eLeft)
    $(".info").append("<h5 class='hide'>Hide</h5><p> Your Earth age is " + earthAge + ". " + eLeft + " </p><p> Your Mercury age is " + mercuryAge + ". " + mLife + " </p><p> Your Venus age is " + venusAge + ". " + vLife + " </p><p> Your Mars age is " + marsAge + ". " + marsLife + " </p><p> Your Jupiter age is " + jupiterAge + ". " + jLife + " </p>");
    $(".info").show('slow');
    $(".hide").click(function(event) {
      event.preventDefault();
      $(".info").hide('slow');
    });
  });
});
