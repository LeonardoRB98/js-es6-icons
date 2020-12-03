// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.
// <i class="fas fa-dog"></i>
// <i class="fas fa-fish"></i>
// <i class="fas fa-dragon"></i>
// <i class="fas fa-hippo"></i>
// <i class="fas fa-spider"></i>
//
// <i class="fas fa-tractor"></i>
// <i class="fas fa-truck"></i>
// <i class="fas fa-wheelchair"></i>
// <i class="fas fa-tram"></i>
// <i class="fas fa-space-shuttle"></i>
// <i class="fas fa-fighter-jet"></i>
// <i class="fas fa-helicopter"></i>
//
// <i class="fas fa-apple-alt"></i>
// <i class="fas fa-carrot"></i>
// <i class="fas fa-lemon"></i>
// <i class="fas fa-pepper-hot"></i>

$(document).ready(
  function() {
    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];

    var iconsContainer = $('#icons_container');
    icons.forEach((element) => {
      iconsContainer.append(`
        <div class='icon'>
          <i class="fas fa-${element.name}"></i>
        </div>
        `);
        console.log(element);
    });

  }
);
