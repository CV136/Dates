let dateDiv = document.createElement("div");
document.body.appendChild(dateDiv)
let pAn = document.createElement("p");
dateDiv.appendChild(pAn);
let pRey = document.createElement("p");
dateDiv.appendChild(pRey);
let pSaint = document.createElement("p");
dateDiv.appendChild(pSaint);
let pBxl = document.createElement("p");
dateDiv.appendChild(pBxl);

let date = new Date(Date.UTC(2022, 11, 13, 14, 0, 0));
let dateAnchorage = date.toLocaleString("en-US", {timeZone: "America/Anchorage"});
pAn.innerHTML = "Anchorage: " + dateAnchorage
let dateReykjavik = date.toLocaleString("is-IS", {timeZone: "Atlantic/Reykjavik"});
pRey.innerHTML = "Reykjavik: " + dateReykjavik
let dateSaintP = date.toLocaleString("ru-RU", {timeZone: "Europe/Moscow"});
pSaint.innerHTML = "Saint-Petersburg: " + dateSaintP
let dateBrussels = date.toLocaleString("fr-BE", {timeZone: "Europe/Brussels"});
pBxl.innerHTML = "Brussels: " + dateBrussels

