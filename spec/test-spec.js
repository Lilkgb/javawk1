import { UserAge } from './../src/backEnd.js';
import {dateString} from './../src/backEnd.js';

describe('UserAge', function() {
  it('should set users birthday', function() {
    let month = "may";
    let day = 31;
    let year = 1995;
    let newDate = dateString(month,day,year);
    expect(newDate).toEqual("may 31, 1995")
  });
});
