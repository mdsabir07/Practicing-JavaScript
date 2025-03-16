const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = "1px solid steelblue";
    section.style.marginBlock = "5px";
    section.style.background = "#eee";
    section.style.borderRadius = "10px";
    section.style.padding = "10px";
}

const newSectionId = document.getElementById('new-section');
newSectionId.classList.add('new-section');
newSectionId.style.textAlign = "center";