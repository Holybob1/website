let nameSpot = document.getElementById('loggedIn');
let loginSpot = document.getElementById('preLogin');


if (nameSpot != null) {
    loginSpot.style.display = none;
    nameSpot.style.display = block;
} else {
    loginSpot.style.display = block;
    nameSpot.style.display = none;
}