// constructor and prototypes
var Store = function(site, minCustomers, maxCustomers, avgCustomerVolume, hourlyVolume, dailyVolume) {
  this.site = site;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomerVolume = avgCustomerVolume;
  this.hourlyVolume = hourlyVolume;
  this.dailyVolume = dailyVolume;
};

Store.prototype.calcHourlyVolume = function() {
  var hourlyVolume = [];
  for (var i = 0; i < hours.length; i += 1) {
    hourlyVolume[i] = Math.round(this.avgCustomerVolume * (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers));
  }
  this.hourlyVolume = hourlyVolume;
};

Store.prototype.calcDailyVolume = function() {
  var dailyVolume = 0;
  this.hourlyVolume.forEach(function(y) {
    dailyVolume = dailyVolume + y;
  });
  this.dailyVolume = dailyVolume;
};

Store.prototype.renderStore = function() {
  var trEl = document.createElement('tr');
  var renderTh = function(text){
    var tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(text));
    trEl.appendChild(tdEl);
  };
  renderTh(this.site);
  renderTh(this.dailyVolume);
  this.hourlyVolume.forEach(renderTh);
  tableEl.appendChild(trEl);
};

// initialize variables
var tableEl = document.getElementById('sales-table');
var storeForm = document.getElementById('store-form');
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var allStores = [];

// render table head
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

// add store
var addStore = function(site, minCustomers, maxCustomers, avgCustomerVolume) {
  var newStore = new Store(site, minCustomers, maxCustomers, avgCustomerVolume);
  allStores.push(newStore);
  allStores[allStores.length - 1].calcHourlyVolume();
  allStores[allStores.length - 1].calcDailyVolume();
  allStores[allStores.length - 1].renderStore();
};

// add initial stores
addStore('Pike Place Market', 17, 88, 5.2);
addStore('SeaTac Airport', 6, 44, 1.2);
addStore('Southcenter Mall', 11, 38, 1.9);
addStore('Bellevue Square', 20, 48, 3.3);
addStore('Alki', 3, 24, 26);

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

// event listener
storeForm.addEventListener('submit', handleStoreSubmit);
