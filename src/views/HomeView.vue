<template>
  <main>
    <section id="home">
      <WelcomeV />
    </section>
    <section id="about">
      <AboutUs />
    </section>
    <section id="merch">
      <MerchC />
    </section>
  </main>
</template>

<script>
import WelcomeV from '@/components/WelcomeV.vue';
import AboutUs from '@/components/AboutUs.vue';
import MerchC from '@/components/MerchC.vue';

export default {
  name: 'HomeView',
  components: {
    WelcomeV,
    AboutUs,
    MerchC
  }
}
</script>
