let flavourSelector = document.getElementById("flavourSelector");
let button = document.getElementById("ice_creamBtn");
let box = document.getElementById("ice_creamBox");
let clearButton = document.getElementById("ClearBtn");
let counterDisplay = document.getElementById("COUNTER");
let count = 0;

button.onclick = function() {
    let ice_cream = document.createElement("img");
    ice_cream.src = flavourSelector.value;
    box.appendChild(ice_cream);

    count++;
    counterDisplay.innerText = count;
};

clearButton.onclick = function() {
    box.innerHTML = "";
    count = 0;
    counterDisplay.innerText = count;
};
// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
let darkMode = false;

darkModeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = darkMode ? ' Light Mode' : ' Dark Mode';
    
    // Update button colors
    const buttons = document.querySelectorAll('.button-group button, .button-group select');
    buttons.forEach(button => {
    });
});