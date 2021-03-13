<template>
  <li>
    Mi nombre es {{ nombre }} tengo {{ edad }} y soy {{ getSexo }}
    <input type="button" value="Cambiar de sexo" @click="cambiarSexo" />
    <input type="button" value="Aumentar edad" @click="incrementarEdad" />

  </li>
</template>

<script>
export default {
    props:{
        nombre:{
            type: String,
            required: true
        },
        edad:{
            type: Number,
            required: true
        },
        esHombre:{
            type: Boolean,
            required: true
        }
    },
    methods:{
        cambiarSexo(){
            this.$emit('cambiar-sexo', this.nombre);
        },
        incrementarEdad(){
            this.$emit('incrementar-edad', this.nombre);
        }
    },
    computed:{
        getSexo(){
            return this.esHombre === true ? 'hombre' : 'mujer';
        }
    }
}
</script>
