import {dateString} from './../src/backEnd.js';
import {getAge} from './../src/backEnd.js';
import {mercury} from './../src/backEnd.js';
import {venus} from './../src/backEnd.js';
import {mars} from './../src/backEnd.js';
import {jupiter} from './../src/backEnd.js';
import {genderLife} from './../src/backEnd.js';
import {answer} from './../src/backEnd.js';

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
    expect(mercuryAge).toEqual(6);
  });

  it('should set Venus age', function() {
    let age = 23;
    let venusAge = venus(age);
    expect(venusAge).toEqual(14);
  });

  it('should set Mars age', function() {
    let age = 23;
    let marsAge = mars(age);
    expect (marsAge).toEqual(43);
  });

  it('should set Jupiter age', function() {
    let age = 23;
    let jupiterAge = jupiter(age);
    expect (jupiterAge).toEqual(273);
  });

  it('should set life expectancy set from gender selection', function() {
    let gender = 'male';
    let genderEx = genderLife(gender);
    expect(genderEx).toEqual(68);
  });

  it('should give years left to live or years lived after life expectancy', function() {
    let age = 23;
    let answerAge = answer(23)
    expect(answerAge).toEqual("You have 23 years left to live.")
  });
});
