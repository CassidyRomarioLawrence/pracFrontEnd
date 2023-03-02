<template>
    <div class="container">
      <div class="home-display row justify-content-start align-items-center">
        <div class="col">
          <h1 class="text-left">A C T I V 8</h1>
          <h6>Train insane or remain the same.</h6>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'WelcomeV'
    }
</script>

<style scoped>
.home-display{
    min-height: 85vh;
}
h1{
    font-size: 8rem;
    color: white;
    text-shadow: 3px 3px 3px orangered;
}
h6{
    color: black;
    font-size: 2rem;
    background-color: orangered;
    text-shadow: 3px 3px 3px whitesmoke;
}
</style>