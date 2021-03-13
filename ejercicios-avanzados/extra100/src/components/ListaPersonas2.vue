<template>
    <ul>
        <persona2
            v-for="persona in personas"
            :key="persona.id"
            :id="persona.id"
            :nombre="persona.nombre"
            :edad="persona.edad"
            @mostrar-edad-persona="$emit('mostrar-edad-lista-personas', $event)"
        ></persona2>
    </ul>
</template>

<script>
export default {
    inject:['personas'],
    emits:['mostrar-edad-lista-personas']
}
</script>