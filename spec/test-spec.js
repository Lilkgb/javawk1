import { UserAge } from './../src/backEnd.js';
import {dateString} from './../src/backEnd.js';
import {getAge} from './../src/backEnd.js';
import {mercury} from './../src/backEnd.js';

describe('UserAge', function() {
  it('should set users birthday', function() {
    let month = "may";
    let day = 31;
    let year = 1995;
    let newDate = dateString(month,day,year);
    expect(newDate).toEqual("may 31, 1995")
  });

  it('should set users age', function() {
    let month = "may";
    let day = 31;
    let year = 1995;
    let newDate = dateString(month,day,year);
    let age = getAge(newDate);
    expect(age).toEqual(23);
  });

  it('should set Mercury age', function() {
    let age = 23;
    let mercuryAge = mercury(age);
    console.log(mercuryAge);
    expect(mercuryAge).toEqual(5.52);
  });
});
