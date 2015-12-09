// initialize variables
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var pikePlace = new Store('Pike Place Market', 17, 88, 5.2, [], 0);
var seaTac = new Store('SeaTac Airport', 6, 44, 1.2, [], 0);
var southcenter = new Store('Southcenter Mall', 11, 38, 1.9, [], 0);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3, [], 0);
var alki = new Store('Alki', 3, 24, 26, [], 0);

// functions
function Store(site, minCustomers, maxCustomers, avgCustomerVolume, hourlyVolume, dailyVolume) {
  this.site = site;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomerVolume = avgCustomerVolume;
  this.hourlyVolume = hourlyVolume;
  this.dailyVolume = dailyVolume;
}

function calcHourlyVolume(store) {
   for (var i = 0; i <= hours.length; i++) {
    x = Math.floor((Math.random() * (store.maxCustomers - store.minCustomers + 1) + store.minCustomers) * store.avgCustomerVolume);
    store.hourlyVolume[i] = x
  }
}
function calcDailyVolume(store) {
  for (var i = 0; i <= hours.length; i++) {
    store.dailyVolume += store.hourlyVolume[i];
  }
}
function renderDailyVolume(store) {
  var El = document.getElementById(store.site);
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(store.site));
  for (var i = 0; i <= hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent =  hours[i] + ': ' + store.hourlyVolume[i] + ' cookies';
    ulEl.appendChild(liEl);
  }
  liEl.textContent = 'Total: ' + store.dailyVolume + ' cookies';
  ulEl.appendChild(liEl);
  El.appendChild(ulEl);
}
function buildTable() {
  var El = document.getElementById('salesTable');
  var tableEl = document.createElement('table');
  tableEl.appendChild(document.createTextNode('foo'));
  for (var i = 0; i <= hours.length; i++) {
    // loop through hours to populate header
  }
  console.log(tableEl);
  El.appendChild(tableEl);
}
function renderDailyVolumeTable(store) {
  var El = document.getElementById(store.site);
  var trEl = document.createElement('tr');
  trEl.appendChild(document.createTextNode(store.site));
  for (var i = 0; i <= hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl = hours[i] + ': ' + store.hourlyVolume[i] + ' cookies';
    trEl.appendChild(tdEl);
  }
  tdEl.textContent = 'Total: ' + store.dailyVolume + ' cookies';
  trEl.appendChild(tdEl);
  El.appendChild(tdEl);
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

// build table
buildTable();

// render daily volume to page
renderDailyVolume(pikePlace);
renderDailyVolume(seaTac);
renderDailyVolume(southcenter);
renderDailyVolume(bellevueSquare);
renderDailyVolume(alki);
