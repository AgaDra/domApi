// odwołanie przez ID, tagi, nazwy class:

// let sectionAbout = document.getElementById("about");

// let paragraph = sectionAbout.getElementsByTagName("p");

// let box = sectionAbout.getElementsByClassName("photo");

// querySelector - najczęściej stosowany:

let qparagraph = document.querySelector("p");
qparagraph.style.fontSize = "100px";

let myButton = document.querySelector("#btn");
// myButton.style.backgroundColor = "green";
myButton.style.fontSize = "80px";

myButton.addEventListener("click", () => {
  myButton.classList.add("btngreen");
});

// nie działa !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let qspan = document.querySelector(".title");
qspan.style.setProperty("color", "blue");
qspan.style.setProperty("border", "2px solid yellow");
qspan.style.setProperty("font-size", "100px");

// // tworzę uchwyt do nowego przycistku button
// // ja tworzę uchwyty i piszę od razu do ma się dziać, ale można wszystkie uchwyty na górze jeden pod drugimm, a niżej wszystkie odwołania

// // let addsth = document.getElementById("addBtn");
// // addsth.addEventListener("click", () => {
// //   let itemName = document.createElement("span");
// //   itemName.id = "itemList";
//   //   itemName.innerText = "Jestem stworzony po kliknięciu";
//   //   dodanie elementy itemName do body w .html, bo najpierw go wpisaliśmy w.js
//   document.body.appendChild(itemName);
// });

// kolejny uchwyt do inputa:

// itemName - to jest zmienna , która ma się pojawiać po jakiejś akcji
// czyli tutaj po wpisaniu tekstu w input ponizej ma się pojawiać zmienna

const shopList = document.querySelector("#List");
const textInput = document.querySelector("#item");
//   zmienna let tex Input - może być powyżej całej funkcji, nawet powinna być z innym uchwytami
const addsth = document.getElementById("addBtn");
addsth.addEventListener("click", () => {
  let itemName = document.createElement("p");
  itemName.id = "itemList";
  // itemName.innerText = textInput.value; dlatego value, aby pobierał wartość wpisaną w input,
  itemName.innerText = textInput.value;
  shopList.appendChild(itemName);
});
// te 4 linijki kodu można zastąpić jedną z innerHTML, ale
// innerHTML nadpisuje i zastępuje każdy kolejny element, nie powstaje lista - 59min- webinaru
