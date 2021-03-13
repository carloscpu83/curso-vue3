<template>
    <h1>Listado de personas transmitiendo eventos via componentes (provide + inyect)</h1>
    <lista-personas2
        @mostrar-edad-lista-personas="$emit('cambiar-flag-desde-compuesto', $event)"
    ></lista-personas2>
</template>

<script>
export default {
    emits: ['cambiar-flag-desde-compuesto']
}
</script>