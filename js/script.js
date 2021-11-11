/**Includere Vue nel proprio progetto.
Doc Vue:  https://vuejs.org/v2/guide/
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!', 
      colorClass: 'orange',
      clickMe: 'Click Me',
      image: 'http://pngimg.com/uploads/earth/earth_PNG21.png'
    },
    methods: {
        changeColor() {
            this.colorClass = this.colorClass === 'orange' ? 'lime': 'orange'
        }
    }
  });