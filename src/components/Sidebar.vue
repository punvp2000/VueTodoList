<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail color="primary" v-model="drawer">
      <v-list bg-color="primary">
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/9.jpg"
        ></v-list-item>
      </v-list>

      <v-list density="compact" nav bg-color="primary">
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Account"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-sticker-check"
          title="Task"
          value="Task"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-clock-time-eight"
          title="Tempo"
          value="check"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-text-box"
          title="List"
          value="list"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Check"
          value="check"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="m-10 bg-secondary rounded-pill" primary>test</div>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-responsive max-width="156">
        <v-text-field class="rounded-pill" label="Username"></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <template v-for="n in 4" :key="n">
            <v-col class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <div
                class="pa-4 text-center bg-secondary rounded-xl rounded-be-0"
              >
                .rounded-xl .rounded-be-0
              </div>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>
<style scoped>
.custom-text-field {
  border-radius: 200px;
}
</style>
