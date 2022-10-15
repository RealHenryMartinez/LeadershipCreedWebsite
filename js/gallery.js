/*
  File Usage: Be able to make scroll buttons for the gallery when it is displayed in the Iphone 12 view
*/

// grabbing the buttons from the DOM HTML into a variable of a const
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');


// giving the variable a method for when it is clicked
    buttonRight.onclick = function () {
      // get the whole div containing the images and give the html method "scrollLeft" to move 200px
      document.getElementById("image-gallery").scrollLeft += 200;

      console.log("right");
    };
    // get the whole div containing the images and give the html method "scrollRight" to move 200px
    buttonLeft.onclick = function () {
      document.getElementById("image-gallery").scrollLeft -= 200;
      console.log("left");

    };