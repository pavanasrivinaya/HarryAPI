<template>
  <v-app fixed>
    <v-app-bar max-height="68px">
      <img id="navimage" src="../assets/harrylogo.jpg" left />

      <v-toolbar-title class="white--text ml-4 mt-2">
        <span class="font-weight-light">Harry</span>
        <span>Potter API</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text color="white" class="white--text mr-3" router to="/" flex>
        <span>Students</span>
      </v-btn>
      <v-btn
        text
        color="white"
        class="white--text"
        router
        to="/professors"
        flex
      >
        <span>Professors</span>
      </v-btn>
      <v-btn text color="white" class="white--text" router to="/about" flex>
        <span>About</span>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
img#navimage {
  height: 66px;
  margin-left: -16px;
}
</style>
