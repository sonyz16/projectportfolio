function updatePoem() {
    const plantInput = document.getElementById('plant').value.trim();
    const animalInput = document.getElementById('animal').value.trim();

    const poemTitle = document.querySelector('.poem-title');
    const poem = document.querySelector('.poem');
    const poemContainer = document.querySelector('.poem-container');

    if (plantInput && animalInput) {
        poemTitle.textContent = `The ${plantInput} and the ${animalInput}`;
        poem.innerHTML = `
            Wake up the ${plantInput}<br>
            The morning has come<br>
            Rouse the ${animalInput}<br><br>
            Because the coffee needs to be done<br>
            'I need the coffee now,' says the ${plantInput}<br>
            Look around, coffee there is none<br>
            All because the ${animalInput} has to run
        `;

        poemContainer.style.display = 'block';
    } else {
        poemContainer.style.display = 'none';
    }
}

document.querySelector('.make-button').addEventListener('click', updatePoem);

document.querySelector('.reset-button').addEventListener('click', () => {
    document.getElementById('plant').value = '';
    document.getElementById('animal').value = '';

    document.querySelector('.poem-container').style.display = 'none';
})