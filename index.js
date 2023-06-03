import DoubleLinkedList from "./dll";
import images from "./images";
import "./style.css";

const list = new DoubleLinkedList();
const viewer = document.getElementById("viewer");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

//load your images from the array.
images.forEach(image => list.push(image));

//set the initial image in the gallery.
let idx = 0;
const counter = document.getElementById("counter");
counter.innerHTML = idx;

//add an event listener to handle when the next button
//is clicked to increment the image gallery.
next.addEventListener("click", function() {
  
  //implement the 'next' functionality here.
  if (idx >= list.length - 1) {
    idx = 0;
    counter.innerHTML = idx;
    viewer.src = list.getNodeAtIndex(idx).value;
  } else {
    idx++;
    counter.innerHTML = idx;
    viewer.src = list.getNodeAtIndex(idx).value;
  }
});

//add an event listener to handle when the previous button
//is clicked to decrement the image gallery.
prev.addEventListener("click", function() {
  
  //impliment the previous functionality here.
  if (idx === 0) {
    idx = list.length - 1;
    counter.innerHTML = idx;
    viewer.src = list.getNodeAtIndex(idx).value;
  } else {
    idx--;
    counter.innerHTML = idx;
    viewer.src = list.getNodeAtIndex(idx).value;
  }
});
