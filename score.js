
//homescreen
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtntwo = document.getElementById("home-score-btn-2")
let homeScoreBtnthree = document.getElementById("home-score-btn-3")

let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoretwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScorethree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
//guest
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtntwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnthree = document.getElementById("guest-score-btn-3")


let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoretwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function increaseGuestScorethree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}