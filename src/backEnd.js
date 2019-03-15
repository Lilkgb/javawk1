export function dateString(month,day,year) {
  let newDate = `${month} ${day}, ${year}`;
  return newDate;
}

export function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  return age;
}

export function mercury(age) {
  let newAge = age * 0.24;
  return newAge;
}

export function venus(age) {
  let newAge = age * 0.62;
  return newAge;
}

export function mars(age) {
  let newAge = age * 1.88;
  return newAge;
}

export function jupiter(age) {
  let newAge = age * 11.86;
  return newAge;
}
