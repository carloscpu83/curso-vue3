<template>
    <h1>Listado de personas transmitiendo eventos via componentes</h1>
    <lista-personas
        :personas="personas"
        @mostrar-edad-lista-personas="$emit('cambiar-flag-desde-compuesto', $event)"
    ></lista-personas>
</template>

<script>
export default {
    emits: ['cambiar-flag-desde-compuesto'],
    props: ['personas']
}
</script>