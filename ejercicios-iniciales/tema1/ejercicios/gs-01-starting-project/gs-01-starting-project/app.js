/* ------------------------------------------- Ejemplo JS ------------------------------------------- */
/* const input = document.querySelector('#goal');
const button = document.querySelector('button');

function addElement(){
    let nuevoValor = input.value;
    let nuevoItem = document.createElement('li');
    nuevoItem.innerText = nuevoValor;
    document.querySelector('ul').appendChild(nuevoItem);
    input.value = '';

}

button.addEventListener('click', addElement, true); */

/* ------------------------------------------ Ejemplo VUE ------------------------------------------- */
const instancia = Vue.createApp({
  data: function () {
    return {
      nuevoItem: "",
      lista: [],
    };
  },
  methods: {
    addItem: function () {
      this.lista.push(this.nuevoItem);
      this.clearItem();
    },
    clearItem: function () {
      this.nuevoItem = "";
    },
  },
}).mount("#app");
