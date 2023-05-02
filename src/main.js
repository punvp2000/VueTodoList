import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// Vuetify
import { createVuetify } from "vuetify";
import 'vuetify/styles'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";

import "animate.css";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#ECEFF1",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  // theme: {
  //   defaultTheme: 'dark'
  // }
});

app.use(vuetify);

app.mount("#app");
