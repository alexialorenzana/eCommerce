// telling javascript the div classes from html
var	testim = document.getElementById("testim"), // that will be used to represent the "testimonial" class 

testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),  //created a new Array object with the given values. //i start by getting the element with id "testim" and then creating an array called testimDots.
testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children), // then i created another array called testimContent, which is a copy of the children of the element with id "testim-content".
testimLeftArrow = document.getElementById("left-arrow"),         
testimRightArrow = document.getElementById("right-arrow"),      // Next, i grabbed two elements from that array: left-arrow and right-arrow.
testimSpeed = 4500,   // I set up variables for speed (the number of milliseconds to move each arrow)
currentSlide = 0,    // currentSlide (which is how many slides have been shown so far)
currentActive = 0,  //currentActive (which is what slide was active when this function started running), timer, 
testimTimer,
touchStartPos,    //touchStartPos, touchEndPos, touchPosDiff, gnoreTouch (how long before we ignore a touch)  it basically
touchEndPos,   // sets up a test that will be used to determine whether or not the user is touching the screen. 
touchPosDiff,
gnoreTouch = 30;
;


window.onload = function() {  // the function that will play the next slide in the slideshow, 

// used for loops and if statements
function playSlide(slide) {
for (var k = 0; k < testimDots.length; k++) {    //this line defines an array called testimDots that will hold all of the dots on each slide
testimContent[k].classList.remove("active");   //first thing that happens in this function is that it loops through all of the slides and removes any active class from each one.
testimContent[k].classList.remove("inactive");         
testimDots[k].classList.remove("active");  //It also removes any inactive class from each one, as well as removing any active dots on each slide.
}

if (slide < 0) {
slide = currentSlide = testimContent.length-1;  //if there are less than 0 slides left, it will set currentSlide to 0 and start over again with 1.
}


if (slide > testimContent.length - 1) {   //if slide is greater than 0, it sets currentSlide back to 0 and executes another conditional statement which sets currentSlide back to the length of testimContent minus 1.
slide = currentSlide = 0;
}

if (currentActive != currentSlide) {    //   setting up a timer that will be used to play the next slide.
testimContent[currentActive].classList.add("inactive");   //checks if the currentActive is not equal to the currentSlide, which means it has already played through all of its slides.
}
testimContent[slide].classList.add("active");   //if so, it sets inactive class on testimContent[currentActive] and adds active class on testimDots[currentActive].    
testimDots[slide].classList.add("active");                    
currentActive = currentSlide;                                   
clearTimeout(testimTimer);  // loops back around and checks if there are any more slides left before playing them again.
testimTimer = setTimeout(function() {           
playSlide(currentSlide += 1);//play the next slide in the slideshow, and set a timer for when it should go back to playing the previous slide.
}, testimSpeed)
}

//here i set up two event listeners for when users click on either left or right arrows.
// these events are then used to change which slide is currently playing and also move forward or backward through the slides.


testimLeftArrow.addEventListener("click", function() {
playSlide(currentSlide -= 1);
})

testimRightArrow.addEventListener("click", function() {
playSlide(currentSlide += 1);
})    

for (var l = 0; l < testimDots.length; l++) {    // loops through all of the dots in testimDots, adding an event listener to each dot that will play a different slide depending on which dot was clicked.
testimDots[l].addEventListener("click", function() {
playSlide(currentSlide = testimDots.indexOf(this)); // when an arrow is clicked, it plays a slide and then moves on to the next one.
})
}




playSlide(currentSlide);

// keyboard shortcuts
document.addEventListener("keyup", function(e) {  // this is the function that will be called every time a keyup event occurs on the keyboard, 
switch (e.keyboardEvent) {  // then checks to see what key was pressed and calls the appropriate function based on that key press.
case 37: //first case is when 37 is pressed which means left arrow should be clicked.
testimLeftArrow.click();
break;
                
case 39: // Then 39 is pressed which means right arrow should be clicked.
testimRightArrow.click();
break;

case 39: // once 39 is pressed to its limit  means nothing should happen because there are no more arrows to click with this particular slide being shown in the slideshow
testimRightArrow.click();
break;
default:
break;
}
})
		
testim.addEventListener("touchstart", function(e) { //  When the user touches the screen,
touchStartPos = e.changedTouches[0].clientX; //  the function stores the coordinates of where they touched in variables called "touchStartPos" and "touchEndPos".
})

testim.addEventListener("touchend", function(e) {       
touchEndPos = e.changedTouches[0].clientX;
			
touchPosDiff = touchStartPos - touchEndPos;  // this calculates how far apart those two points are with a variable called "touchPosDiff".
console.log(touchPosDiff);
console.log(touchStartPos);	     // log the current position of the left and right arrows, as well as their starting and ending positions.
console.log(touchEndPos);	

			
if (touchPosDiff > 0 + ignoreTouch) {           
testimLeftArrow.click(); // If that difference is greater than 0 + ignoreTouch, it calls function testimLeftArrow.click().
} else if (touchPosDiff < 0 - ignoreTouch) {  
testimRightArrow.click();    // Otherwise if that difference is less than 0 - ignoreTouch, it calls function testimRightArrow.click().
} else {  // if the difference between touchStartPos and touchEndPos then it means that a user has not clicked on one of the arrows.
return;
}

})
}




