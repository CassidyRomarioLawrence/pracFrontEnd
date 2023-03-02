<template>
  <nav>
    <NavBar />
  </nav>
  <footer>
    <FooTer />
  </footer>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooTer from '@/components/FooTer.vue'

export default {
  name: 'App',
  components:{
    NavBar,
    FooTer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Gloock&family=Kaushan+Script&family=Roboto:wght@900&display=swap');
@import "~bootstrap-icons/font/bootstrap-icons.css";
#app {
  font-family: 'Fjalla One', sans-serif;
  background-image: url(https://i.postimg.cc/J76pvrfZ/pexels-max-rahubovskiy-7031706.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}

#home,#about,#merch{
  min-height: 100vh;
}

#about{
  background-color: antiquewhite;
}
</style>
