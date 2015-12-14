// initialize variables
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var pikePlace = new Store('Pike Place Market', 17, 88, 5.2, [], 0);
var seaTac = new Store('SeaTac Airport', 6, 44, 1.2, [], 0);
var southcenter = new Store('Southcenter Mall', 11, 38, 1.9, [], 0);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3, [], 0);
var alki = new Store('Alki', 3, 24, 26, [], 0);
var allStores = [pikePlace, seaTac, southcenter, bellevueSquare, alki];

var El = document.getElementById('salesTable');
var tableEl = document.createElement('table');

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
function renderTableHead() {
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.appendChild(document.createTextNode('Location'));
  trEl.appendChild(tdEl);
  var tdEl = document.createElement('td');
  tdEl.appendChild(document.createTextNode('Total'));
  trEl.appendChild(tdEl);
  for (var i = 0; i < /*Why can't I use <= here?*/ hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(hours[i]));
    trEl.appendChild(tdEl);
  }
  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
  El.appendChild(tableEl);
}
function renderTableRows() {
  for (var i = 0; i < allStores.length ; i++ ) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(allStores[i].site));
    console.log(tdEl);
    trEl.appendChild(tdEl);
    console.log(tdEl);
    var tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(allStores[i].dailyVolume));
    trEl.appendChild(tdEl);
    for(var j =  0; j < hours.length; j++ ){
      var tdEl = document.createElement('td');
      tdEl.appendChild(document.createTextNode(allStores[i].hourlyVolume[j]));
      trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
    El.appendChild(tableEl);
  }
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

//  render table head
renderTableHead();

// render table rows
renderTableRows();
