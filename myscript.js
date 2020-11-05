$(document).ready(function() {
// Icon set
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

const colors = [
    'blue',
    'orange',
    '#a5109a'
  ];

// contenitore icone let modificabile
let contenitoreIcone = $('.icons');

//funzione per stampa icone
const iconeColorate = colorareIcone(icons, colors);
  console.log(iconeColorate);
  printIcons(iconeColorate, contenitoreIcone);
});

//funzione che stampa le icone del array icons
function printIcons(icons, contenitoreIcone) {
    icons.forEach((icon)=>{
        const {family, prefix, name, color} = icon;
        const html =//parte di html
           `<div class="icon">
              <i class="${family} ${prefix}${name}"
              style="color: ${color}"></i>
              <div class="nomeIcona">${name}</div>
            </div>
            `
        contenitoreIcone.append(html);
        return
    });


}


//funzioni per assegnazione colore alle icone per tipo
function colorareIcone (icons, colors) {
const types = getType(icons);
console.log(types);
// creo new array non toccando il primo e iteo con le icone
const iconeColarate = icons.map((icon) => {
  const index = types.indexOf(icon.type);
  // copia esatta
  return {
    ...icon,
    color: colors[index]
  }
});
return iconeColarate;//ritorno risultato
}
//riconosco in base al tipo
function getType(icons) {
const types = [];
icons.forEach((icon) => {
  // verifico se tipo c'è se no inserisco
  if(! types.includes(icon.type)) {
    types.push(icon.type);
  }
});
return types;//faccio ritornare il tipo
}
