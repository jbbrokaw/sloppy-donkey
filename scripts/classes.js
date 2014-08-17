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
    if (showArray.length > 0) {
      showArray[0].displaySmall("show0", 0);//replace the template div with info from first show
      templateElement.style.visibility = "visible";
    }
    var newDivID = "";
    var newElement;
    var i;
    for (i = 1; i < showArray.length; i++) {//create elements based on first show for all subsequent shows, fill them in
      newDivID = "show" + i;
      newElement = templateElement.cloneNode(true);
      newElement.id = newDivID;
      parentElement.appendChild(newElement);
      showArray[i].displaySmall(newDivID, i);
    }
  };

  this.checkAvailability = function (date) {
    var i;
    for (i = 0; i < showArray.length; i++) {
      if (showArray[i].dateTime.dateString() === date.dateString()) {
        return false;
      }
    }
    return true;
  };

  this.displayLarge = function (showIndex) {
    showArray[showIndex].displayLarge();
  };
}

function Admin(inputFormID) {
  this.inputForm = document.getElementById(inputFormID);

  this.getData = function () {
    //read in data
    return;
  };

  this.validateData = function () {
    //check whether data is valid
    return;
  };

  this.sendData = function () {
    //write data out
    return;
  };
}
