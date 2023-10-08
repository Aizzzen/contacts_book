<template>
  <router-view></router-view>
</template>

<script>
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

.Vue-Toastification__toast--default.my-custom-toast-class {
  background-color: rgba(255, 255, 255, 1);
  margin-left: 32px;
  margin-bottom: 48px;
  box-shadow: 0 0 16px 0 rgba(176, 197, 222, 0.5);
  border-radius: 4px;
  gap: 12px;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: rgba(84, 84, 84, 1);

  &:before {
    content: url("./assets/toast-success.png");
    position: relative;
    top: 1px;
    margin-right: 4px;
  }
}

</style>
