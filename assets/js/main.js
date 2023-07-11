function Time() {

 // Creating object of the Date class
 var date = new Date();

 // Get current hour
 var hour = date.getHours();
 // Get current minute
 var minute = date.getMinutes();
 // Get current second
 var second = date.getSeconds();

 // Variable to store AM / PM
 var period = "";

 // Assigning AM / PM according to the current hour
 if (hour >= 12) {
 period = "PM";
 } else {
 period = "AM";
 }

 // Converting the hour in 12-hour format
 if (hour == 0) {
 hour = 12;
 } else {
 if (hour > 12) {
 hour = hour - 12;
 }
 }

 // Updating hour, minute, and second
 // if they are less than 10
 hour = update(hour);
 minute = update(minute);
 second = update(second);

 // Adding time elements to the div
 document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;

 // Set Timer to 1 sec (1000 ms)
 setTimeout(Time, 1000);
}

 // Function to update time elements if they are less than 10
 // Append 0 before time elements if they are less than 10
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}

Time();


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
