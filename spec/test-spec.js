import { UserAge } from './../src/backEnd.js';

describe('UserAge', function() {
  it('should set users birthday', function () {
    let user = new UserAge();
    user.setMonth('May')
    user.setDay(31);
    user.setYear(1995);
    console.log(user);
    expect(user).toEqual('May', 31, 1995);
  });
});
