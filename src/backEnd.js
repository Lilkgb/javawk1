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
  let roundAge = Math.round(newAge)
  return roundAge;
}

export function venus(age) {
  let newAge = age * 0.62;
  let roundAge = Math.round(newAge)
  return roundAge;
}

export function mars(age) {
  let newAge = age * 1.88;
  let roundAge = Math.round(newAge)
  return roundAge;
}

export function jupiter(age) {
  let newAge = age * 11.86;
  let roundAge = Math.round(newAge)
  return roundAge;
}

export function gender(gender) {
  if(gender === 'male') {
    let life = 68 - age;
    return life;
  }
  else if(gender === 'female') {
    let life = 72 - age;
    return life;
  }
  else if(gender === 'other') {
    let life = 70 - age;
    return life;
  }
  else {}
}
