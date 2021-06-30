let container = document.getElementsByClassName("container")[0];
for (let i = 0; i < 36; i++) {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");
var booked_seat = document.querySelector(".booked");
var remaining_seat = document.querySelector(".remaining");
var booked = 0;
var remaining = 36;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("bookedSeat")) {
      box.classList.remove("bookedSeat");
      booked -=1;
      remaining += 1;
    } else {
      box.classList.add("bookedSeat");
      booked += 1;
      remaining -= 1;
    }
    
    booked_seat.innerText = "Booked Seat : " + booked;
    remaining_seat.innerText = "Remaining Seat : " + remaining;
  });
});