<template>
  <v-app>
    <Navbar />

    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>
