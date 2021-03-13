<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
  <section class="container">
    <h2>Soy {{ objUser.nombre }} y tengo {{ objUser.edad }}</h2>
  </section>
  <section class="container">
    <h2>Yo no Soy {{ objUser2.name }} y no tengo {{ objUser2.age }}</h2>
    <input type="button" @click="incrementar" value="Incrementar" />
  </section>
  <section class="container">
    <h2>Tengo un {{ marca }} de color {{ color }}</h2>
  </section>
  <section class="container">
    <h2>
      {{ propiedadComputada }}
    </h2>
  </section>
  <section class="container">
    <h2>
      <p>
        <label for="referencia">Referencia: </label
        ><input type="text" id="referencia" v-model="referencia" />
      </p>
      <p>
        <label for="reactivo1">Reactivo 1: </label
        ><input type="text" id="reactivo1" v-model="reactivo.valor1" /><button
          @click="mostrarValor(reactivo.valor1)"
        >
          Mostrar
        </button>
      </p>
      <p>
        <label for="reactivo2">Reactivo 2: </label
        ><input type="text" id="reactivo2" v-model="reactivo.valor2" />
      </p>
    </h2>
  </section>
  <section class="container">
    <h2>
      {{ watchSimple }}
    </h2>
    <input type="button" value="Incrementar" @click="incrementarValor" />
  </section>
  <section class="container">
    <h2>
      El valor 1 es: <input type="number" v-model="watchCompuesto.val1" />
    </h2>
    <h2>
      El valor 2 es: <input type="text" v-model="watchCompuesto.val2" />
    </h2>
  </section>
  <section class="container">
    <h2>
      El valor de la referencia es : {{ mireferencia.value }}
    </h2>
    <input type="text" ref="mireferencia" />
    <input type="button" value="Copiar" @click="copiarValorReferencia" />
  </section>
  <section class="container">
    <persona nombre="Carlos" apellido="Carpintero" edad="99"></persona>
  </section>
  <section class="container">
    <persona-inject></persona-inject>
  </section>
  <section class="container">
    <ciclo-vida></ciclo-vida>
  </section>
</template>

<script>
import { isReactive, isRef, ref, toRefs, computed, watch, provide } from 'vue';
import { reactive } from 'vue';
import Persona from './components/persona.vue';
import PersonaInject from './components/persona2.vue';
import CicloVida from './components/cicloVida.vue'

export default {
  /*data() {
    return {
      userName: 'Maximilian',
    };
  },*/

  components:{
    Persona,
    PersonaInject,
    CicloVida
  },
  setup() {
    let usuario = ref('maximilian');
    usuario.value = 'Maximilian';
    ////////////////////////////////////////////////////////////////////
    let objUser1 = ref({
      nombre: 'carlos',
      edad: 5
    });
    objUser1.value.nombre = 'Carlos';
    ////////////////////////////////////////////////////////////////////
    let objUser2 = reactive({
      name: 'carlos2',
      age: 7
    });
    objUser2.name = 'Carlos2';
    ////////////////////////////////////////////////////////////////////
    console.log(
      isRef(usuario)
        ? 'La variable usuario es referencia'
        : 'La variable usuario NO es referencia'
    );
    console.log(
      isReactive(objUser2)
        ? 'La variable objUser2 es reactiva'
        : 'La variable objUser2 es NO reactiva'
    );
    ////////////////////////////////////////////////////////////////////
    let objUser3 = reactive({
      color: 'rojo',
      marca: 'seat'
    });

    setTimeout(function() {
      objUser3.marca = 'Seat';
      objUser3.color = 'Verde';
    }, 2000);

    let objUser3Aux = toRefs(objUser3);
    console.log(
      isRef(objUser3Aux.marca) && isRef(objUser3Aux.color)
        ? 'Las propiedades son referencias'
        : 'Las propiedades no son referencias'
    );
    ////////////////////////////////////////////////////////////////////
    function incrementar() {
      objUser2.age++;
    }
    ////////////////////////////////////////////////////////////////////
    let objNumeros = reactive({
      n1: 9,
      n2: 2
    });

    let miPropiedadComputada = computed(function() {
      return objNumeros.n1 + objNumeros.n2;
    });
    ////////////////////////////////////////////////////////////////////
    let referencia = ref('mivalor');
    let reactivo = reactive({
      valor1: 100,
      valor2: 289
    });
    function mostrarValor(param) {
      alert(param);
    }
    ////////////////////////////////////////////////////////////////////
    let mivariablewatch = ref(5);
    let incrementarValor = function(){
      mivariablewatch.value++;
    }
    watch(mivariablewatch,function(nuevo, viejo){
      alert('Nuevo valor ' + nuevo + ' Viejo valor ' + viejo);
    });
    ////////////////////////////////////////////////////////////////////
    let objWatchCompuesto = reactive({val1: 1, val2: 'abc'});
    let objWatchCompuestoRef = toRefs(objWatchCompuesto);
    watch([objWatchCompuestoRef.val1, objWatchCompuestoRef.val2], function(valoresNuevos, valoresViejos){
      console.log('val1 nuevo = ' + valoresNuevos[0] + ' val1 viejo = ' + valoresViejos[0]);
      console.log('val2 nuevo = ' + valoresNuevos[1] + ' val2 viejo = ' + valoresViejos[1]);
    });
    ////////////////////////////////////////////////////////////////////
    let mireferencia = ref('valorVacio');
    let copiarValorReferencia = function(){
      mireferencia.value =  mireferencia.value.value;
    }
    ////////////////////////////////////////////////////////////////////
    provide('nombre', 'Carlos inject'),
    provide('edad', '88')
    ////////////////////////////////////////////////////////////////////
    return {
      // Valores
      userName: usuario,
      objUser: objUser1,
      objUser2: objUser2,
      marca: objUser3Aux.marca,
      color: objUser3Aux.color,
      // Funciones
      incrementar: incrementar,
      mostrarValor: mostrarValor,
      // Propiedades computadas
      propiedadComputada: miPropiedadComputada,
      // V-model
      referencia: referencia,
      reactivo: reactivo,
      // Watch simple
      incrementarValor: incrementarValor,
      watchSimple: mivariablewatch,
      watchCompuesto: objWatchCompuesto,
      // Referencias
      mireferencia: mireferencia,
      copiarValorReferencia: copiarValorReferencia
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
