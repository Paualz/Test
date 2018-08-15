'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
    /*Falta establecer casos de error y de rutas equivocadas/inexistentes*/
    /*establecer views como variable global?*/
    let views = document.querySelector('.views');

    fetch('../pages/home.html', {
        method: 'GET'
    }).then(function(response) {
        response.text().then(
            function(response) {
              //Inject slider js in this function!!!!
              // let script = document.createElement('script');
              //   script.src = "scripts/slider.js";
              //   document.head.appendChild(script);
                views.innerHTML = response;
            }
        );
    });

    let home = document.querySelector('.home').addEventListener('click', injectHome);

    function injectHome() {
        fetch('../pages/home.html').then(function(response) {
            response.text().then(
                function(response) {
                    views.innerHTML = response;
                })
        })
    }
    let episodes = document.querySelector('.episodes').addEventListener('click', injectEpisodes);

    function injectEpisodes() {
        fetch('../pages/episodios.html').then(function(response) {
            response.text().then(
                function(response) {
                    views.innerHTML = response;
                    //Inject script when the episodes page is rendered
                    let script = document.createElement('script');
                    script.src = "scripts/loadData.js";
                    document.head.appendChild(script);
                }
            )
        })
    }

    let characters = document.querySelector('.characters').addEventListener('click', injectCharacters);

    function injectCharacters() {
        fetch('../pages/personajes.html').then(function(response) {
            response.text().then(
                function(response) {
                    views.innerHTML = response;
                }
            )
        })
    }

    let quiz = document.querySelector('.quiz').addEventListener('click', injectQuiz);

    function injectQuiz() {
        fetch('../pages/quiz.html').then(function(response) {
            response.text().then(
                function(response) {
                    views.innerHTML = response;
                  }
              )
          })
      }
    })

// http://web-unicen.herokuapp.com/api/grupo41/alzuriMassillo/episodios/
