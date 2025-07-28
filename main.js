// function for my hobby as reading
function addReadingBenefit() {
  const input = document.getElementById("benefit-reading");
  const text = input.value.trim();
  if (text !== "") {
    const list = document.getElementById("reading-list");
    const newList = document.createElement("li");
    newList.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => list.removeChild(newList);
    newList.appendChild(deleteBtn);
    list.appendChild(newList);
    input.value = ""; // Clear input
  }
}


// function for my hobby as dancing
function addDancingBenefit() {
  const input = document.getElementById("benefit-dancing");
  const text = input.value.trim();
  if (text !== "") {
    const list = document.getElementById("dancing-list");
    const newList = document.createElement("li");
    newList.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => list.removeChild(newList);
    newList.appendChild(deleteBtn);
    list.appendChild(newList);
    input.value = ""; // Clear input
  }
}


// function for my hobby as journalling
function addJournalBenefit() {
  const input = document.getElementById("benefit-journal");
  const text = input.value.trim();
  if (text !== "") {
    const list = document.getElementById("journal-list");
    const newList = document.createElement("li");
    newList.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => list.removeChild(newList);
    newList.appendChild(deleteBtn);
    list.appendChild(newList);
    input.value = ""; // Clear input
  }
}


// function for alerting when contact form is submitted
function formSubmission(event) {
  event.preventDefault();
//   this function prevents the multiple submissions before reloading the page
  alert("Well Done! You've submitted the form.")
}


// // function for date and time
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'};
  const formattedDate = now.toLocaleDateString('en-US', options); //this displays the output into human readable form
  const formattedTime = now.toLocaleTimeString('en-US');
  document.getElementById("dateAndTime").textContent = `${formattedDate}, ${formattedTime}`;
}
  // update the time in every 1000 milliseconds i.e 1 second
  setInterval(updateDateTime, 1000);
  updateDateTime(); 
  // This calls the function immediately once so the date and time appear right away without waiting for the first 1 second interval.