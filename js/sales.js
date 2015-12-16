// constructor and prototypes

var Store = function(site, minCustomers, maxCustomers, avgCustomerVolume, hourlyVolume, dailyVolume) {
  this.site = site;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomerVolume = avgCustomerVolume;
};

Store.prototype.calcHourlyVolume = function () {
  // for (var i = 0; i < hours.length; i++) {
  //  // fix broken math
  //  x = Math.floor((Math.random() * (store.maxCustomers - store.minCustomers + 1) + store.minCustomers) * store.avgCustomerVolume);
  //  // x = Math.floor(((Math.random() * (store.maxCustomers - store.minCustomers + 1)) + store.minCustomers) * store.avgCustomerVolume);
  //  store.hourlyVolume[i] = x;
  // }
};

Store.prototype.calcDailyVolume = function() {
  // var calcDailyVolume = function(store) {
  //   for (var i = 0; i < hours.length; i++) {
  //     store.dailyVolume += store.hourlyVolume[i];
  //   }
  // };
};

Store.prototype.addRow = function () {
  // var trEl = document.createElement('tr');
  // var tdEl = document.createElement('td');
  // tdEl.appendChild(document.createTextNode(allStores[i].site));
  // trEl.appendChild(tdEl);
  // var tdEl = document.createElement('td');
  // tdEl.appendChild(document.createTextNode(allStores[i].dailyVolume));
  // trEl.appendChild(tdEl);
  // for(var j =  0; j < hours.length; j++ ){
  //   var tdEl = document.createElement('td');
  //   tdEl.appendChild(document.createTextNode(allStores[i].hourlyVolume[j]));
  //   trEl.appendChild(tdEl);
  // }
  // tableEl.appendChild(trEl);
  // el.appendChild(tableEl);
};

// initialize variables
var tableEl = document.getElementById('sales-table');
var storeForm = document.getElementById('store-form');

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var allStores = [];
addStore('Pike Place Market', 17, 88, 5.2);
addStore('SeaTac Airport', 6, 44, 1.2);
addStore('Southcenter Mall', 11, 38, 1.9);
addStore('Bellevue Square', 20, 48, 3.3);
addStore('Alki', 3, 24, 26);

// add store
function addStore(site, minCustomers, maxCustomers, avgCustomerVolume) {
  var newStore = new Store(site, minCustomers, maxCustomers, avgCustomerVolume);
  allStores.push(newStore);
  //allStores[allStores.length -1].addRow;
};

// event handler
var handleStoreSubmit = function(event) {
  event.preventDefault();

  var site = event.target.site.value;
  var minCustomers = parseInt(event.target.minCustomers.value, 10);
  var maxCustomers = parseInt(event.target.maxCustomers.value, 10);
  var avgCustomerVolume = parseInt(event.target.avgCustomerVolume.value, 10);

  addStore(site, minCustomers, maxCustomers, avgCustomerVolume);

  event.target.site.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCustomerVolume.value = null;
};

// add table head
(function() {
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');

  var renderTh = function(text) {
    var thEl = document.createElement('th');
    thEl.appendChild(document.createTextNode(text));
    trEl.appendChild(thEl);
  }

  renderTh("Location");
  renderTh("Total");
  hours.forEach(renderTh);

  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
})();

//

// event listener
storeForm.addEventListener('submit', handleStoreSubmit);
