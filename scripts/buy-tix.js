var passedString = window.location.search;
if (passedString.length > 0) {
  var URLvar = passedString.split("=")[1];
  if (URLvar.match("show[0-9]+") !== null) {
    var showIndex = URLvar.split("show")[1];
    sloppyShows.displayLarge(parseInt(showIndex));
  } else {
    alert("bad variable passed in URL");
  }
} else {
  alert("bad variable passed in URL");
}
