<template>
    <ul>
        <persona
            v-for="persona in personas"
            :key="persona.id"
            :id="persona.id"
            :nombre="persona.nombre"
            :edad="persona.edad"
            @mostrar-edad-persona="$emit('mostrar-edad-lista-personas', $event)"
        ></persona>
    </ul>
</template>

<script>
export default {
    props:['personas'],
    emits:['mostrar-edad-lista-personas']
}
</script>