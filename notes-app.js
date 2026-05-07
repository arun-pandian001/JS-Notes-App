let notesArray = JSON.parse(localStorage.getItem("Notes")) || [];

const ansContainer = document.getElementById('ans');
const nameInput = document.getElementById('name');
const contextInput = document.getElementById('context');
const popup = document.getElementById('popup');
const addBtn = document.getElementById('btn');
const enterBtn = document.getElementById('enter');
const removeBtn = document.getElementById('remove');


addBtn.addEventListener('click', () => {
    popup.style.display = "flex";
});


removeBtn.addEventListener('click', () => {
    popup.style.display = "none";
    clearInputs();
});


enterBtn.addEventListener('click', () => {
    const author = nameInput.value.trim();
    const context = contextInput.value.trim();

    if (author === "" || context === "") {
        alert("Please enter both Author and Context");
        return;
    }

    createNoteElement(author, context);
    
   
    notesArray.push({ author, context });
    localStorage.setItem("Notes", JSON.stringify(notesArray));
    
    popup.style.display = "none";
    clearInputs();
});

function createNoteElement(N, C) {
    const card = document.createElement('div');
    card.setAttribute("id", "container");
    card.innerHTML = 
        `<h3>${N}</h3>
        <p>${C}</p>
        <button class="clr">Clear</button>`
    ;
    
    ansContainer.appendChild(card);

    card.querySelector('.clr').addEventListener('click', () => {
        card.remove();
        deleteNoteData(N, C);
    });
}

function deleteNoteData(N, C) {
    notesArray = notesArray.filter(note => !(note.author === N && note.context === C));
    localStorage.setItem("Notes", JSON.stringify(notesArray));
}

function clearInputs() {
    nameInput.value = "";
    contextInput.value = "";
}


window.onload = () => {
    notesArray.forEach(note => {
        createNoteElement(note.author, note.context);
    });
};
