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

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: rgba(84, 84, 84, 1);
}

@media screen and (max-width: 768px) {
  * {
    font-size: 12px;
    line-height: 19px;
  }
}

*,
*::before,
*::after {
  max-width: 100%;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
}

@media screen and (max-width: 992px) {
  .container {
    max-width: 928px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 704px;
  }
}

@media screen and (max-width: 576px) {
  .container {
    max-width: 552px;
  }
}

@media screen and (max-width: 376px) {
  .container {
    max-width: 352px;
  }
}

.Vue-Toastification__toast--default.my-custom-toast-class {
  background-color: rgba(255, 255, 255, 1);
  margin-left: 32px;
  margin-bottom: 48px;
  box-shadow: 0 0 16px 0 rgba(176, 197, 222, 0.5);
  border-radius: 4px;
  gap: 12px;
  cursor: default;

  &:before {
    content: url("./assets/toast-success.png");
    position: relative;
    top: 2px;
    margin-right: 4px;
  }
}

a {
  text-decoration: none;
}

.maz-border-danger {
  border-color: rgba(221, 221, 221, 1) !important;
}

.m-input.--has-z-2 .m-input-wrapper {
  overflow: visible !important;
}

.maz-border-success {
  border-color: rgba(221, 221, 221, 1) !important;
}

input[id*='MazInput'] {
  padding-right: 10px !important;
  padding-left: 10px !important;;
  color: rgba(84, 84, 84, 1) !important;
  height: 40px !important;
}

div .m-input-wrapper {
  &:hover, &:focus {
    border-color: rgba(47, 128, 237, 1) !important;
  }
}

.m-input-wrapper.--default-border {
  //border-radius: 4px !important;
  box-shadow: none !important;
}

.m-input-wrapper {
  border-width: 1px !important;

  transition-timing-function: linear !important;
  -webkit-transition-duration: 0s !important;
  transition-duration: 0s !important;
}

</style>
