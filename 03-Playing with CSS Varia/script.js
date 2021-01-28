const getInputs = document.querySelectorAll('.controls input');

function setChanges() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

getInputs.forEach(input => {
    input.addEventListener('change', setChanges);
});
getInputs.forEach(input => {
    input.addEventListener('mousemove', setChanges);
});