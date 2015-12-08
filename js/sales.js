// initialize variables
var pikePlace = {
  location: 'Pike Place Market',
  minHourlyCustomers: 17,
  maxHourlyCustomers: 88,
  avgCustomerVolume: 5.2,
  hourlyVolume: [],
  dailyVolume: 0,
}
var seaTac = {
  location: 'SeaTac Airport',
  minHourlyCustomers: 6,
  maxHourlyCustomers: 44,
  avgCustomerVolume: 1.2,
  hourlyVolume: [],
  dailyVolume: 0,
}
var southcenter = {
  location: 'Southcenter Mall',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCustomerVolume: 1.9,
  hourlyVolume: [],
  dailyVolume: 0,
}
var bellevueSquare = {
  location: 'Bellevue Square',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 48,
  avgCustomerVolume: 3.3,
  hourlyVolume: [],
  dailyVolume: 0,
}
var alki = {
  location: 'Alki',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCustomerVolume: 26,
  hourlyVolume: [],
  dailyVolume: 0,
}

var pikePlaceEl = document.getElementById('pikePlace');
var seaTacEl = document.getElementById('seaTac');
var southcenterEl = document.getElementById('southcenter');
var bellevueSquareEl = document.getElementById('bellevueSquare');
var alkiEl = document.getElementById('alki');

var pikePlaceUlEl = document.createElement('ul');
var seaTacUlEl = document.createElement('ul');
var southcenterUlEl = document.createElement('ul');
var bellevueSquareUlEl = document.createElement('ul');
var alkiUlEl = document.createElement('ul');

pikePlaceEl.appendChild(document.createTextNode('Pike Place Market'));
seaTacEl.appendChild(document.createTextNode('SeaTac Airport'));
southcenterEl.appendChild(document.createTextNode('Southcenter Mall'));
bellevueSquareEl.appendChild(document.createTextNode('Bellevue Square'));
alkiEl.appendChild(document.createTextNode('Alki'));

// class examples
// function Student(course, lastInitial, hairColor) {
//   this.course = course;
//   this.lastInitial = lastInitial;
//   this.hairColor = hairColor;
// }
//
// // these exist outside, isn't in memory until called
// Student.prototype.intro = function() {
//   console.log('My last initial is' + this.lastInitial);
// };
//
// Student.prototype.location = 'Washington';
//
// var paul = new Student('201d2', 'S', 'auburn');

// functions
function calcHourlyVolume(store) {
   for (var i = 0; i <= 7; i++) {
    store.hourlyVolume[i] = Math.round((Math.random() * (store.maxHourlyCustomers - store.minHourlyCustomers) + store.minHourlyCustomers) * store.avgCustomerVolume);
  }
}

function calcDailyVolume(store) {
  for (var i = 0; i <= 7; i++) {
    store.dailyVolume = store.dailyVolume + store.hourlyVolume[i];
  }
}

//

// calculate hourly volume
calcHourlyVolume(pikePlace);
calcHourlyVolume(seaTac);
calcHourlyVolume(southcenter);
calcHourlyVolume(bellevueSquare);
calcHourlyVolume(alki);

// calculate daily volume
calcDailyVolume(pikePlace);
calcDailyVolume(seaTac);
calcDailyVolume(southcenter);
calcDailyVolume(bellevueSquare);
calcDailyVolume(alki);
