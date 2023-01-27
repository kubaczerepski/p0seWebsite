const modal = document.getElementById("modal");

const submitButton = document.getElementById("submitButton");

const closeButton = document.getElementsByClassName("close")[0];

const inputs = document.getElementsByName('name');



submitButton.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
  inputs.forEach(input => {
    input.value = '';
    });
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}