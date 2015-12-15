// constructor for individual store
var Store = function(site, minCustomers, maxCustomers, avgCustomerVolume, hourlyVolume, dailyVolume) {
  this.site = site;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomerVolume = avgCustomerVolume;
  this.hourlyVolume = hourlyVolume;
  this.dailyVolume = dailyVolume;
};

// initialize variables
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var el = document.getElementById('salesTable');
var tableEl = document.createElement('table');
var storeform = document.getElementById('store-form');
var allStores = [];
var newStore = new Store('Pike Place Market', 17, 88, 5.2, [], 0);
allStores.push(newStore);
var newStore = new Store('SeaTac Airport', 6, 44, 1.2, [], 0);
allStores.push(newStore);
var newStore = new Store('Southcenter Mall', 11, 38, 1.9, [], 0);
allStores.push(newStore);
var newStore = new Store('Bellevue Square', 20, 48, 3.3, [], 0);
allStores.push(newStore);
var newStore = new Store('Alki', 3, 24, 26, [], 0);
allStores.push(newStore);

// functions
var calcHourlyVolume =  function(store) {
   for (var i = 0; i < hours.length; i++) {
    // is this broken?
    x = Math.floor((Math.random() * (store.maxCustomers - store.minCustomers + 1) + store.minCustomers) * store.avgCustomerVolume);
    store.hourlyVolume[i] = x
  }
};
var calcDailyVolume = function(store) {
  for (var i = 0; i < hours.length; i++) {
    store.dailyVolume += store.hourlyVolume[i];
  }
};
var renderTableHead = function() {
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.appendChild(document.createTextNode('Location'));
  trEl.appendChild(tdEl);
  var tdEl = document.createElement('td');
  tdEl.appendChild(document.createTextNode('Total'));
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(hours[i]));
    trEl.appendChild(tdEl);
  }
  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
  el.appendChild(tableEl);
};
var renderTableRows = function() {
  for (var i = 0; i < allStores.length ; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(allStores[i].site));
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(allStores[i].dailyVolume));
    trEl.appendChild(tdEl);
    for(var j =  0; j < hours.length; j++ ){
      var tdEl = document.createElement('td');
      tdEl.appendChild(document.createTextNode(allStores[i].hourlyVolume[j]));
      trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
    el.appendChild(tableEl);
  }
};
var handleStoreSubmit = function(event) {
  event.preventDefault();
  clearTable();
  console.log('I should have just cleared the table!!');

  var site = event.target.site.value;
  var minCustomers = parseInt(event.target.minCustomers.value, 10);
  var maxCustomers = parseInt(event.target.maxCustomers.value, 10);
  var avgCustomerVolume = parseInt(event.target.avgCustomerVolume.value);
  var newStore = new Store(site, minCustomers, maxCustomers, avgCustomerVolume, [], 0);
  console.log(newStore);
  event.target.site.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCustomerVolume.value = null;

  allStores.push(newStore);
  allStores.forEach(calcHourlyVolume);
  allStores.forEach(calcDailyVolume);
  renderTableHead();
  renderTableRows();
};
var clearTable = function() {
  console.log("removing" + el.firstChild);
  el.removeChild(el.firstChild);
};

// populate table with initial data
allStores.forEach(calcHourlyVolume);
allStores.forEach(calcDailyVolume);
renderTableHead();
renderTableRows();

// event listener
storeForm.addEventListener('submit', handleStoreSubmit);
