const nsList = document.getElementById('new-section-list');
const li = document.createElement('li');
li.innerText = "Sabiha want to come here!";

nsList.appendChild(li);


// Creating new section
const main = document.getElementById('main');
const section = document.createElement('section');

const h2 = document.createElement('h2');
h2.innerText = "Sabiha want to play";
section.appendChild(h2);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "She want to catch the beloon";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Sabiha smilling";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "She create noise";
ul.appendChild(li3);

section.appendChild(ul);

main.appendChild(section);


// Creating section with innerHTML
const sectionAnother = document.createElement('section');
sectionAnother.innerHTML = `
<h2>Created a new section by innerHTML</h2>
<ul>
<li>Muhammad</li>
<li>Sabiha</li>
<li>Amena</li>
<li>Sabir</li>
</ul>

<a href="#">Click me</a>
`;
main.appendChild(sectionAnother);