// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.


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

    const colors = ['coral', 'blue', 'red'];
    const types = [];
    // creazione array types con all'interno il ogni types dell'array icons (non ripetuti)
    icons.forEach((element) => {
      if (types.includes(element.type) == false) {
        console.log(types.includes(element) == false);
        types.push(element.type);
      }
    });
    // assegnazione colore tramiete indice
    icons.forEach((element) => {
      let index = types.indexOf(element.type); //ritorna l'indice dell'elemento nell'array
      element.color = colors[index];
    });
    console.log(icons);

    // scorro tutto l'array icon e creo l'HTML con icona e colore personalizzato
     var iconsContainer = $('#icons_container');
    iconsGenerator(icons, iconsContainer);

    let select = $('select');

    types.forEach((element) => {
      select.append(`
        <option value="${[element]}">${[element]}</option>
        `);
    });
    select.change(
      function() {
        let selectedType = $(this).val();
        if ($(this) == '') {
          iconsGenerator(icons, iconsContainer);
        } else {
          
        }
      }
    );
  }
);

/*----------------------------FUNCTION--------------------------------------------*/

function iconsGenerator (array, htmlObj) {
  htmlObj.html('');
  array.forEach((element) => {
    htmlObj.append(`
      <div class="icon">
      <i class="fas fa-${element.name}" style='color:${element.color};'></i>
      <div>${element.name}</div>
      </div>
      `);
    });
    return htmlObj;
  }
