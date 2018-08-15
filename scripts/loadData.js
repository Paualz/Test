'use strict';

let server = 'https://web-unicen.herokuapp.com';
let container = document.querySelector('tbody');

let cargarEp = document.querySelector('.carga').addEventListener('click', function cargarEpisodes(e) {
    e.preventDefault();
    let numero = parseInt(document.querySelector('.numero').value);
    let nombre = document.querySelector('.nombre').value;
    let fecha = document.querySelector('.fecha').value;

    let data = {
        "thing": {
            episode: {
              "numero": numero,
              "nombre" : nombre,
              "fecha": fecha
            }
        }
    };
    fetch(server + '/api/groups/AlzuriMassillo/episodios/', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })
        .then(function(r) {
            return r.json()

        .then(function(json) {
          //FIX: reload page with the response
          console.log('Esta es la respuesta:' + json);
          //hacer un appenchild con la respuesta en un nuevo td
        })
        .catch(function(error) {
            console.log(error);

        })
      })
});

//Fetch all the data and pass to bootstrap's generated tbody element

fetch('https://web-unicen.herokuapp.com/api/groups/AlzuriMassillo/episodios/')
    .then(function(r) {
        return r.json()
            .then(function(json) {
                mostrar(json)
            })
    })

function mostrar(json) {
    for (let i = 1; i < json.episodios.length; i++) {
        let numero = (json.episodios[i].thing.episode.numero);
        let nombre = (json.episodios[i].thing.episode.nombre);
        let fecha = (json.episodios[i].thing.episode.fecha);
        let hash = (json.episodios[i]._id);
        container.innerHTML += `<tr>
                                <td>${numero}</td>
                                <td>${nombre}</td>
                                <td>${fecha}</td>
                                <td><button type="button" class="btn btn-danger button" value=${hash}> Borrar </button></td>
                                <td><button type="button" class="btn btn-primary buttonEdit" value=${hash}> Editar </button></td>
                               </tr>`;
    }
}
setTimeout(function eliminar(){
  let botones = document.querySelectorAll('.button');
      for(let i = 0; i < botones.length; i++){
        botones[i].addEventListener('click', function borrar(e){
          e.preventDefault();
          let btnHash = document.querySelectorAll('.button')[i].value;
          console.log('Deleting hash:' + btnHash);
          fetch(server + '/api/groups/AlzuriMassillo/episodios/' + btnHash, {
                  "method": "DELETE",
                  "headers": {
                      "Content-Type": "application/json"
                  },
              })
              .then(function(r) {
                console.log('Respuesta: ' + r);
                return r.json()
                    .then(function(json) {
                        console.log(json)
                    })
              })
        })
      }
    },1000);

    setTimeout(function editar(){
      let cargaEditada = document.querySelector('.cargaEditada');
      let botones = document.querySelectorAll('.buttonEdit');
          for(let i = 0; i < botones.length; i++){
            botones[i].addEventListener('click', function editarDatos(e){
              e.preventDefault();
              let editarInfo = document.querySelector('.editarInfo').classList.add('visible');
              let btnHash = document.querySelectorAll('.buttonEdit')[i].value;
              console.log('Editing hash:' + btnHash);
              cargaEditada.addEventListener('click', function subirInfo {
                let numero = document.querySelector('.numeroEdit').value;
                let nombre = document.querySelector('.nombreEdit').value;
                let fecha = document.querySelector('.fechaEdit').value;

              let data = {
                  "thing": {
                      episode: {
                        "numero": numero,
                        "nombre" : nombre,
                        "fecha": fecha
                      }
                  }
              };
              fetch(server + '/api/groups/AlzuriMassillo/episodios/' + btnHash, {
                      "method": "PUT",
                      "headers": {
                          "Content-Type": "application/json"
                      },
                      "body": JSON.stringify(data)
                  })
                  .then(function(r) {
                      return r.json()

                  .then(function(json) {
                    //FIX: reload page with the response
                    console.log('Esta es la respuesta:' + json);
                    //hacer un appenchild con la respuesta en un nuevo td
                  })
                  .catch(function(error) {
                      console.log(error);

                  })
                })
                });
              })
            }
        },1000);
















// /*Borrar contenido del episodio*/
//       for(let i = 0; i < json.episodios.length; i++){
//         let hash = document.querySelectorAll('.button')[i].value;
//         let botones = document.querySelectorAll('.button')[i].addEventListener('click', function borrar(e){
//           e.preventDefault();
//           console.log('Deleting hash:' + hash);
//           fetch(server + '/api/groups/AlzuriMassillo/episodios/' + hash, {
//                   "method": "DELETE",
//                   "headers": {
//                       "Content-Type": "application/json"
//                   },
//               })
//               .then(function(r) {
//                   console.log('Respuesta: ' + r);
//               })
//         })
//       }

      // for(let i = 0; i < json.episodios.length; i++){
      //   let hash = document.querySelectorAll('.button')[i].value;
      //   let editar = document.querySelectorAll('.buttonEdit')[i].addEventListener('click', function editar(e){
      //     e.preventDefault();
      //     let editarInfo = document.querySelector('.editarInfo').classList.add('visible');
      //     let numeroEdit = document.querySelector('.numeroEdit');
      //     numeroEdit.value = json.episodios[i].thing.episode.numero;
      //     let nombreEdit = document.querySelector('.nombreEdit');
      //     nombreEdit.value = json.episodios[i].thing.episode.nombre;
      //     let fechaEdit = document.querySelector('.fechaEdit');
      //     fechaEdit.value = json.episodios[i].thing.episode.fecha;
      //
      //     let cargarEditada = document.querySelector('.cargaEditada').addEventListener('click', editarInformacion);
      //     function editarInformacion (){
      //       let data = {
      //           "thing": {
      //               episode: {
      //                 "numero": numeroEdit,
      //                 "nombre" : nombreEdit,
      //                 "fecha": fechaEdit
      //               }
      //           }
      //       };
      //       fetch(server + '/api/groups/AlzuriMassillo/episodios/' + hash, {
      //               "method": "PUT",
      //               "headers": {
      //                   "Content-Type": "application/json"
      //               },
      //               "body": JSON.stringify(data)
      //           })
      //           .then(function(r) {
      //               return r.json()
      //
      //           .then(function(json) {
      //             //FIX: reload page with the response
      //             console.log('Esta es la respuesta:' + json);
      //             //hacer un appenchild con la respuesta en un nuevo td
      //           })
      //           .catch(function(error) {
      //               console.log(error);
      //
      //           })
      //         })
      //   };
      // })
          //SEND DATA USING PUT BACK TO THE API
        // }


//
