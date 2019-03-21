export function dateString(month,day,year) {
  let newDate = `${month} ${day}, ${year}`;
  return newDate;
}

export function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    if (birthDate == "Invalid Date") {
      return "Invalid"
    }
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  return age;
}

export function mercury(age) {
  let newAge = age / 0.24;
  let roundAge = Math.round(newAge)
  if (age === "invalid") {
    return "invalid"
  }
  return roundAge;
}

export function venus(age) {
  let newAge = age / 0.62;
  let roundAge = Math.round(newAge)
  return roundAge;
}

export function mars(age) {
  let newAge = age / 1.88;
  let roundAge = Math.round(newAge)
  return roundAge;
}

export function jupiter(age) {
  let newAge = age / 11.86;
  let roundAge = Math.round(newAge)
  return roundAge;
}

export function genderLife(gender) {
  if(gender === 'male') {
    return 68
  }
  else if(gender === 'female') {
    return 72;
  }
  else if(gender === 'other') {
    return 70;
  }
  else {return "error";}
}

export function answer(life) {
  if (life >= 0) {
   return "You have " + life + " years left to live on this planet!";
  }
  else if (life < 0){
    return "You have lived " + life + " years past the life expectancy on this planet!"
  }
}
