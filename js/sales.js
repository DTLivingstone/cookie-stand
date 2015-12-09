// initialize variables
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
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

// functions
function calcHourlyVolume(store) {
   for (var i = 0; i <= hours.length; i++) {
    store.hourlyVolume[i] = Math.floor((Math.random() * (store.maxHourlyCustomers - store.minHourlyCustomers) + store.minHourlyCustomers) * store.avgCustomerVolume);
  }
}
function calcDailyVolume(store) {
  for (var i = 0; i <= hours.length; i++) {
    store.dailyVolume += store.hourlyVolume[i];
  }
}
function renderDailyVolume(store) {
  var El = document.getElementById(store.location);
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(store.location));
  for (var i = 0; i <= hours.length ; i++) {
    var liEl = document.createElement('li');
    liEl.textContent =  hours[i] + ': ' + store.hourlyVolume[i] + ' cookies';
    ulEl.appendChild(liEl);
  }
  liEl.textContent = 'Total: ' + store.dailyVolume + ' cookies';
  ulEl.appendChild(liEl);
  El.appendChild(ulEl);
}

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
