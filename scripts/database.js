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
var schudge = new Band("Schudge", "Liquefying beats.");
var titNun = new Band("Tit Nun", "Loud!")
var blackCarl = new Band("Black Carl", "Very melodic.");
var slamDanceRobot = new Band("Slam Dance Robot", "Math rock.");
var theRedTeam = new Band("The Red Team", "We'll make your eyes bleed.");
var ironicHomeless = new Band("Ironic Homeless", "Like an emo Ke$ha.");
var nippleZippers = new Band("Nipple Zippers", "Squirrel Nut Zippers with more nipples.");
var turdStation = new Band("Turd Station", "Muzak for your toilet.");
var rolodexter = new Band("Rolodexter", "We'll be stylin' your sheets.");
var sobolobotomy = new Band("Sobolobotomy", "Dulcet tones.");

//Defines some shows for these bands, adds them to the list

var sloppyShows = new ShowList();

var show;

show = new Show(rolodexter, sobolobotomy, seventhMob, new Date("Sep 1, 2014 20:00 PDT"), 10);
sloppyShows.addShow(show);
show = new Show(mintedMouth, titNun, ironicHomeless, new Date("Sep 3, 2014 19:00 PDT"), 8);
sloppyShows.addShow(show);
show = new Show(schudge, slamDanceRobot, blackCarl, new Date("Sep 2, 2014 20:00 PDT"), 5);
sloppyShows.addShow(show);
show = new Show(theRedTeam, schudge, youngSoup, new Date("Sep 7, 2014 19:00 PDT"), 12);
sloppyShows.addShow(show);
show = new Show(regalPensioner, titNun, ironicHomeless, new Date("Sep 5, 2014 22:00 PDT"), 15);
sloppyShows.addShow(show);
show = new Show(theRedTeam, blackCarl, mintedMouth, new Date("Sep 15, 2014 22:00 PDT"), 5);
sloppyShows.addShow(show);
show = new Show(nippleZippers, turdStation, ironicHomeless, new Date("Sep 12, 2014 22:00 PDT"), 7);
sloppyShows.addShow(show);
show = new Show(rolodexter, sobolobotomy, dynamicPark, new Date("Sep 17, 2014 22:00 PDT"), 8);
sloppyShows.addShow(show);
show = new Show(blackCarl, nippleZippers, titNun, new Date("Sep 21, 2014 22:00 PDT"), 9);
sloppyShows.addShow(show);
show = new Show(dynamicPark, ironicHomeless, turdStation, new Date("July 12, 2014 22:00 PDT"), 12);
sloppyShows.addShow(show);
show = new Show(titNun, blackCarl, ironicHomeless, new Date("Sep 20, 2014 22:00 PDT"), 20);
sloppyShows.addShow(show);
show = new Show(dynamicPark, mintedMouth, slamDanceRobot, new Date("Sep 25, 2014 22:00 PDT"), 14);
sloppyShows.addShow(show);
show = new Show(schudge, sobolobotomy, rolodexter, new Date("Sep 28, 2014 22:00 PDT"), 13);
sloppyShows.addShow(show);
