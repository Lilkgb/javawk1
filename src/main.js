import $ from 'jquery';
import './input.scss';
import {dateString} from './backEnd.js';

$(document).ready(function() {
  let month = 'may';
  let day = 31;
  let year = 1995;
  let newDate = dateString(month,day,year);
  let user = new Date(newDate);
  console.log(user);
});
