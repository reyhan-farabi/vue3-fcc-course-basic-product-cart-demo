let app = Vue.createApp({
  data() {
    return {
      inventory: {
        carrots: 0,
        pineapple: 0,
        cherries: 0,
      },
    };
  },
});

// mount app
app.mount("#app");
