var buttonElement = document.getElementById("submit");
var administrator = new BookingAdmin();
buttonElement.addEventListener("click", administrator.getData);
var dateElement = document.getElementById("date-request");
dateElement.addEventListener("blur", administrator.validateBookingDate);
