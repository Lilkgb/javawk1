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
    let month = 'may';
    let day = 31;
    let year = 1995;
    let newDate = dateString(month,day,year);
    let age = getAge(newDate);
    console.log(age);
  });
});
