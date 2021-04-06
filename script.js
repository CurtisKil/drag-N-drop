const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// On event firing fill background of box
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// For each empty add eventListener
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";

  //   Let hold happen first
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  // Prevent default reset of current drag operation to "none"
  e.preventDefault();
}

function dragEnter(e) {
  // Prevent default rejection of user selection as potential target element
  e.preventDefault();

  //   Add class of hovered to box on drag enter
  this.className += " hovered";
}

function dragLeave() {
  //   Reset class on drag leave
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
