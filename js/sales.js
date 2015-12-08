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

// var pikePlaceEl = document.getElementById('pikePlace');
//
// var pikePlaceUlEl = document.createElement('ul');
//
// pikePlaceUlEl.appendChild(document.createTextNode('Pike Place Market'));

function renderDailyVolume(store) {
  var El = document.getElementById(store.location);
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(store.location));

  for (i = 0; i <=7 ; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = store.hourlyVolume[i];
    ulEl.appendChild(liEl);
  }
  El.appendChild(ulEl);
}

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

// render daily volume to page
renderDailyVolume(pikePlace);
renderDailyVolume(seaTac);
renderDailyVolume(southcenter);
renderDailyVolume(bellevueSquare);
renderDailyVolume(alki);
