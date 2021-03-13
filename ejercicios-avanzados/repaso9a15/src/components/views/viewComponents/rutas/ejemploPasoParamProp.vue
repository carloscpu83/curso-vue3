<template>
  <p v-if="miparam === '' || miparam === null">Por favor agregue a la URL un parámetro en caso de no haberlo hecho ya.</p>
  <p v-else>El parámetro recibido es: {{miparam}}</p>
</template>

<script>
export default {
    props:{
        miparam:{
            type: String,
            required: true
        }
    }
};
</script>