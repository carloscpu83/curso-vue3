<template>
  <h2>Rutas</h2>
  <p>
    <router-link to="/rutas/pasoparametro"
      >Ejemplo paso de parámetro</router-link
    >
  </p>
  <p>
    <router-link to="/rutas/pasoparametroprop"
      >Ejemplo paso de parámetro como propiedad</router-link
    >
  </p>
  <p>
    <router-link to="/rutas/objetos/crear"
      >Enrutado mediante objeto
    </router-link>
  </p>
  <p>
    <router-link to="/rutas/multicomponente"
      >Pantalla multicomponente
    </router-link>
  </p>
  <router-view></router-view>
</template>
