const age = [12, 14, 16, 13, 17];
const age2 = [12, 14, 16, 13];
const age3 = [12, 14, 16, 13, 17];
const allAge = age.concat(age2).concat([7]) .concat(age3);
const allAge2 = [...age,...age2,5,...age3];  
// console.log(allAge2);

const business = 650;
const minister = 450;
const sochib = 250;
const maxNumber=[650,450,250];
// const maximum = Math.max(business,minister,sochib);
const maximum = Math.max(...maxNumber);
console.log(maximum);