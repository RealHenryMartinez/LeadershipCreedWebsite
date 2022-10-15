/*
    file use: to make two buttons that turn on the animation for the front-image
*/


// getting the button id and adding an "addEventListener" to listen for the click event from the user
startbtn.addEventListener("click", () => {

    // change the image animation to be true / play animation when startbtn is clicked
    person.style.animation = "front-animation 5s infinite";
    person.style.webkitAnimation = "front-animation 5s infinite";
    // person.style.opacity = "100%";
});

stopbtn.addEventListener("click", () => {
    // change the image animation to be false / stop animation when startbtn is clicked by disabeling it with ""
    person.style.webkitAnimation = "";
    // person.style.opacity = "0%";
});
