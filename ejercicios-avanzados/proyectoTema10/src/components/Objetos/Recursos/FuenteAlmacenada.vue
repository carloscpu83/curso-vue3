<template>
  <tarjeta>
    <li>
      <div>
        <header>
          <h3>{{ titulo }}</h3>
         <boton-eliminar mode="flat" @click="$emit('eliminar', id)">Eliminar</boton-eliminar>
        </header>
        <p>{{ descripcion }}</p>
        <nav>
          <a :href="link">Ver Recurso</a>
        </nav>
      </div>
    </li>
  </tarjeta>
</template>

<script>
import BotonEliminar from '../../UI/Boton.vue';
export default {
  components: {
    'boton-eliminar': BotonEliminar
  },
  props: {
    id: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  emits:['eliminar']
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
