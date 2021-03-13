<template>
    <h2>Slots</h2>
    <p><router-link to="/slots/ejemploSlot1">Ejemplo básico</router-link></p>
    <p><router-link to="/slots/ejemploSlot2">Ejemplo con alcance</router-link></p>
    <p><router-view></router-view></p>
</template>

<script>
export default {
}
</script>