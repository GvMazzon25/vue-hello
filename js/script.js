/**Includere Vue nel proprio progetto.
Doc Vue:  https://vuejs.org/v2/guide/
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!', 
      colorClass: 'lime',
      clickMe: 'Click Me',
      marsClass: 'hide',
      earthClass: 'solid',
      earthImage: 'http://pngimg.com/uploads/earth/earth_PNG21.png',
      marsImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86092a8a-4acf-4f87-b9e7-18724a0b2d37/db7qfln-e649090e-3b43-4242-86fa-6ce036735634.png/v1/fill/w_1600,h_1600,strp/mars_8k_stock_1of2_by_hameed_db7qfln-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzg2MDkyYThhLTRhY2YtNGY4Ny1iOWU3LTE4NzI0YTBiMmQzN1wvZGI3cWZsbi1lNjQ5MDkwZS0zYjQzLTQyNDItODZmYS02Y2UwMzY3MzU2MzQucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TJ0gMMKr1IPU4GsEv2I1ScgWR91kV-3_6YRRfnMbl4M'
    },
    methods: {
        change(){
            this.colorClass = this.colorClass === 'lime' ? 'orange': 'lime' 

            if(this.earthClass === 'solid'){
                this.earthClass  = 'hide';
                this.marsClass = 'solid';
            }else{
                this.marsClass = 'hide';
                this.earthClass = 'solid';
            }    
        }
    }
  });