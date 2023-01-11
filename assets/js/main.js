const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener('click', () => {
    let input = yearInput.value;
    output.innerHTML = 2023 - input;
});