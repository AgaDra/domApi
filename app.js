// odwołanie przez ID, tagi, nazwy class:

let sectionAbout = document.getElementById("about");

let paragraph = sectionAbout.getElementsByTagName("p");

let box = sectionAbout.getElementsByClassName("photo");

// querySelector - najczęściej stosowany:

let qparagraph = document.querySelector("p");
qparagraph.style.fontSize = "100px";

let myButton = document.querySelector("#btn");
myButton.style.fontSize = "80px";
myButton.style.backgroundColor = "green";

// nie działa !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

myButton.style.setProperty("backgroundcolor", "blue");
