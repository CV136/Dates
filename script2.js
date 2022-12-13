//let date1 = Date(); //calculating doesn't work with Date()
let date1 = new Date(Date.UTC(2022, 11, 13));
let date2 = new Date(Date.UTC(1991, 6, 28));

let ex2 = document.createElement("div")
document.body.appendChild(ex2)
let today = document.createElement("p")
ex2.appendChild(today)
let dayOfBirth = document.createElement("p")
ex2.appendChild(dayOfBirth)
let howManyDays = document.createElement("p")
ex2.appendChild(howManyDays)

today.innerHTML = date1
dayOfBirth.innerHTML = date2

let sub = date1.getTime() - date2.getTime()
let daysPassed = sub / 1000 / 60 / 60 / 24;
howManyDays.innerHTML = daysPassed + "days"


/*function timePassed() {
    let sub = date1.getTime() - date2.getTime();
    return sub;
}*/
//let timePassed = date1.getTime() - date2.getTime()
//let timePassed = Math.abs(date1 - date2);

//howManyDays.innerHTML = (Number(date1) - Number(date2)) + " days"