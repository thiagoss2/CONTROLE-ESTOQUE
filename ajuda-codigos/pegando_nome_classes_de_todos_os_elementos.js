const elemento = document.getElementById('meuElemento');
const elementos = elemento.querySelectorAll('*');
const classes = [];

for (const elemento of elementos) {
  for (const className of elemento.classList) {
    classes.push(className);
  }
}

console.log(classes); // Output: ["minha-classe", "classe-filho1", "classe-filho2", "classe-filho3", ...]
