//Class definitions should be read in before this file

//defines bands, adds to list for example

var dynamicPark = new Band("Dynamic Park",
  "Synth meets rockabilly with a twist of twang. It's hard to describe really!");
var youngSoup = new Band("Young Soup",
  "Punk meets folk with a twist of hokum blues. It's hard to describe really!");
var seventhMob = new Band("Seventh Mob",
  "Bossa Nova meets honky tonk with a twist of breakdance. It's hard to describe really!");
var mintedMouth = new Band("Minted Mouth",
  "Doomcore meets bluegrass with a twist of trance. It's hard to describe really!");
var regalPensioner = new Band("Regal Pensioner",
  "Ghettotech meets eurobeat with a twist of crunkcore. It's hard to describe really!");

//Defines some shows for these bands, adds them to the list

var sloppyShows = new ShowList();

var show;

show = new Show(dynamicPark, youngSoup, seventhMob, new Date("Sep 1, 2014 20:00 PDT"), 10);
sloppyShows.addShow(show);
show = new Show(mintedMouth, seventhMob, youngSoup, new Date("Sep 3, 2014 19:00 PDT"), 8);
sloppyShows.addShow(show);
show = new Show(dynamicPark, youngSoup, seventhMob, new Date("Sep 2, 2014 20:00 PDT"), 5);
sloppyShows.addShow(show);
show = new Show(dynamicPark, regalPensioner, youngSoup, new Date("Sep 7, 2014 19:00 PDT"), 12);
sloppyShows.addShow(show);
show = new Show(regalPensioner, youngSoup, seventhMob, new Date("Sep 5, 2014 22:00 PDT"), 15);
sloppyShows.addShow(show);
