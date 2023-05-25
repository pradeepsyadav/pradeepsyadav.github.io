// this method will remove name and summary as we scroll
var oldScrollValue = window.scrollY;
var headerName = document.querySelector(".head-name");
var headerSummary = document.querySelector(".head-summary");
var aboutSection = document.querySelector("#aboutMe");
var valueInterested = aboutSection.getBoundingClientRect().top;

var currentScrollingDirection = "NEUTRAL";
window.onscroll = showOrDisplayHeader;

function showOrDisplayHeader(e) {
    var currValue = window.scrollY;
    valueInterested = aboutSection.getBoundingClientRect().top;

    if ((currValue > oldScrollValue)) { // down
        if (currentScrollingDirection !== "DOWN") { //only values again if direction not already same
            headerName.classList.add("invisible");
            headerSummary.classList.add("invisible");
        }
        currentScrollingDirection = "DOWN";
    } else { // UP
        if (currValue === 0) {
            headerName.classList.remove("invisible");
            headerSummary.classList.remove("invisible");
        }
        currentScrollingDirection = "UP";
    }
    oldScrollValue = currValue;
}
