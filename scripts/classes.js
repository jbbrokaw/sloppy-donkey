//JUST CLASS DEFINITIONS. NOTHING IN THIS FILE SHOULD DO ANYTHING

function Band(name, description) {
  this.name = name;
  this.description = description;
}

function Show(headLinerIn, subBand1In, subBand2In, dateTimeIn, priceIn) {
  var headLiner = headLinerIn;
  var subBand1 = subBand1In;
  var subBand2 = subBand2In;
  var dateTime = dateTimeIn;
  var price = priceIn;
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                    "Sep", "Oct", "Nov", "Dec"];

  this.displaySmall = function (parentID, linkIndex) {//fills in the parent element with parentID with info about the show;
    var parentElement = document.getElementById(parentID);
    //parentElement has three children, all <section>'s: date, info, and <p>link
    var dateBox = parentElement.children[0];
    //dateBox has three children, all <p>'s: month, date, year
    dateBox.children[0].textContent = monthNames[dateTime.getMonth()];
    dateBox.children[1].textContent = String(dateTime.getDate());
    dateBox.children[2].textContent = String(dateTime.getFullYear());
    var infoBox = parentElement.children[1];
    //infoBox has 4 children, <h1> headliner, 2x <h2> subbands, and <p> date, time
    infoBox.children[0].textContent = headLiner.name;
    infoBox.children[1].textContent = subBand1.name;
    infoBox.children[2].textContent = subBand2.name;
    infoBox.children[3].textContent = (dateTime.getHours() - 12) + " pm, $" + price;
    var linkBox = parentElement.children[2];
    //the link box has exactly 1 child, a <p> with exactly 1 <a> in it.
    linkBox.children[0].children[0].href = "buy-tix.html?show=show" + linkIndex;
  };

  this.displayLarge = function () {//on the ticket sales page, display more info
    document.getElementById("headliner-name").textContent = headLiner.name;
    document.getElementById("headliner-description").textContent = headLiner.description;
    document.getElementById("subband1-name").textContent = subBand1.name;
    document.getElementById("subband1-description").textContent = subBand1.description;
    document.getElementById("subband2-name").textContent = subBand2.name;
    document.getElementById("subband2-description").textContent = subBand2.description;
    var dateTimeElement = document.getElementById("date-time");
    var dateTimeString = (dateTime.getHours() - 12) + " pm on " +
              monthNames[dateTime.getMonth()] + " " + dateTime.getDate();
    dateTimeElement.textContent = dateTimeString;
    document.getElementById("price").textContent = "$" + price;
  };

  this.getDateTime = function () {
    return dateTime.valueOf();
  };

  this.getDateString = function () {
    return dateTime.toDateString();
  };
}

function compareShows(show1, show2) {
  return show1.getDateTime() - show2.getDateTime();
}

function ShowList() {//maybe add a cleaner to not display shows with dates before today
  var showArray = [];

  this.addShow = function (show) {//also keeps it sorted
    showArray.push(show);
    showArray.sort(compareShows);
  };

  this.display = function () {//Fills the parent with a bunch of divs for each
    var parentID = "list-box";
    var parentElement = document.getElementById(parentID);
    var templateElement = document.getElementById("show0"); //linked to html
    var i = 0;
    var today = new Date();
    while ((showArray[i].getDateTime() < today.valueOf()) && (i < showArray.length)) {
      i++;
    } //Do not display past shows. Maintain show numbers, though
    if (i < showArray.length) {
      showArray[i].displaySmall("show0", i);//replace the template div with info from first show
      templateElement.style.visibility = "visible";
    }
    var newDivID = "";
    var newElement;
    var n;
    /*Now we list the next 9 (max) shows in the list*/
    for (n = i + 1; (n < showArray.length) && ((n - i) < 10); n++) {//create elements based on first show for all subsequent shows, fill them in
      newDivID = "show" + n;
      newElement = templateElement.cloneNode(true);
      newElement.id = newDivID;
      parentElement.appendChild(newElement);
      showArray[n].displaySmall(newDivID, n);
    }
  };

  this.checkAvailability = function (date) {
    var i;
    for (i = 0; i < showArray.length; i++) {
      if (showArray[i].getDateString() === date.toDateString()) {
        return false;
      }
    }
    return true;
  };

  this.displayLarge = function (showIndex) {
    showArray[showIndex].displayLarge();
  };
}

function BookingAdmin() {

  this.getData = function () {
    var bandName = document.getElementById("band-name").value;
    var bandDescription = document.getElementById("band-description").value;
    var requestedDate = new Date(document.getElementById("date-request").value + " PDT");
    if (!sloppyShows.checkAvailability(requestedDate)) {
      alert("Please request an available date");
      return;
    }
    var email = document.getElementById("email").value;
    console.log(new Band(bandName, bandDescription));
    requestedDate.setHours(20);
    console.log(requestedDate);
    console.log(email);
    var receiptElement = document.getElementById("receipt");
    var requesterNameElement = document.getElementById("requester");
    requesterNameElement.textContent = bandName;
    receiptElement.style.display = "block";

  };

  this.validateBookingDate = function () {
    var requestedDate = new Date(document.getElementById("date-request").value + " PDT");
    var messageElement = document.getElementById("bad-date");
    if (!sloppyShows.checkAvailability(requestedDate)) {
      messageElement.style.display = "block";
    } else {
      messageElement.style.display = "none";
    }
  };
}

function PurchasingAdmin() {

  this.getData = function () {
    var customer = {}
    customer.name = document.getElementById("customer-name").value;
    customer.address = document.getElementById("customer-address").value;
    customer.city = document.getElementById("customer-city").value;
    customer.state = document.getElementById("customer-state").value;
    customer.zip = document.getElementById("customer-zip").value;
    customer.creditCard = document.getElementById("customer-cc").value;
    customer.Email = document.getElementById("customer-email").value;
    console.log(customer);
    var receiptElement = document.getElementById("receipt");
    var customerNameElement = document.getElementById("customer");
    customerNameElement.textContent = customer.name;
    receiptElement.style.display = "block";
  };
}
