<template>
  <div class="allcharacters">
    <div class="aligns">
      <v-flex xs6 class="justify-center ml-5">
        <v-autocomplete
          v-model="searchterm"
          :items="characters"
          auto-select-first
          clearable
          dense
          filled
          solo
          solo-inverted
          label="Search for characters"
          item-text="name"
          item-value="name"
          class="ml-5 aligns"
        ></v-autocomplete
      ></v-flex>
    </div>
    <v-container v-if="loading" class="progress">
      <div class="text-xs-right">
        <v-progress-circular
          indeterminate
          :size="150"
          :width="8"
          color="white"
          right
        >
        </v-progress-circular>
      </div>
    </v-container>
    <v-container v-else>
      <v-layout wrap>
        <v-flex v-for="char in filterednames" :key="char.name" pb-3 mb2 xs4>
          <v-card class="mx-auto" max-width="250">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="char.image"
            >
            </v-img>
            <v-card-title class="orange--text">{{ char.name }}</v-card-title>

            <v-card-subtitle class="pb-2">
              House: {{ char.house }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <p>Date of Birth: {{ char.dateOfBirth }}</p>
              <p>Ancestry: {{ char.ancestry }}</p>
              <p>Patronus: {{ char.patronus }}</p>
              <p>Played By: {{ char.actor }}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "character",
  data() {
    return {
      characters: [],
      loading: true,
      searchterm: []
    };
  },
  created: function() {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/students`)
      .then(res => {
        this.characters = res.data;
        this.loading = false;
      });
  },
  computed: {
    filterednames: function() {
      return this.characters.filter(char => {
        return char.name.match(this.searchterm);
      });
    }
  }
};
</script>
<style scoped>
.allcharacters {
  margin-top: -530px;
}
.aligns {
  margin-left: 350px;
}
.progress {
  margin-top: 50px;
  margin-left: 550px;
}
</style>
