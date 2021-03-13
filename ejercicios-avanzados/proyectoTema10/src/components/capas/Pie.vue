<template>
<footer>
    <h5><slot></slot></h5>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer h5 {
  color: white;
  margin: 0;
}
</style>