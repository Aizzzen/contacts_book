<template>
  <router-view></router-view>
</template>

<script>
import 'vue3-toastify/dist/index.css';
import {mapActions} from "vuex";

export default {
    name: 'App',
    methods: {
        ...mapActions([
            "GET_CONTACTS",
        ]),
    },
    mounted() {
        this.GET_CONTACTS();
    }
}
</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  font-family: "Proxima Nova", system-ui;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
}

</style>
