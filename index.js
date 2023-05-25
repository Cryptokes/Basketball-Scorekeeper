var homeScore = document.getElementById("homescore")
var guestScore = document.getElementById("guestscore")
var homePoints = 0
var guestPoints = 0
function plus1Home() {
    homePoints += 1
    homeScore.innerText = homePoints
}
function plus2Home() {
    homePoints += 2
    homeScore.innerText = homePoints
}
function plus3Home() {
    homePoints += 3
    homeScore.innerText = homePoints
}
function plus1Guest() {
    guestPoints += 1
    guestScore.innerText = guestPoints
}
function plus2Guest() {
    guestPoints += 2
    guestScore.innerText = guestPoints
}
function plus3Guest() {
    guestPoints += 3
    guestScore.innerText = guestPoints
}