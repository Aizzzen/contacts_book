<template>
  <router-view></router-view>
    <div id="loader-block">
        <div id="loader-spinner"/>
    </div>
    <toast-message
            :message="this.TOAST_MESSAGE()"
    />
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ToastMessage from "@/components/Toast.vue";

export default {
    name: 'App',
    components: {ToastMessage},
    methods: {
        ...mapGetters([
            "TOAST_MESSAGE"
        ]),
        ...mapActions([
            "GET_CONTACTS",
        ]),
        ...mapGetters([
            "TOAST_MESSAGE"
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

a {
  text-decoration: none;
}

.loader {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.7;
  z-index: 11;

  &__spinner {
    position: absolute;
    top: 30%;
    left: 47%;
    border: 16px solid rgba(221, 221, 221, 1);
    border-top: 16px solid rgba(47, 128, 237, 1);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;

    @media screen and (max-width: 1200px) {
      left: 45.5%;
    }
    @media screen and (max-width: 768px) {
      width: 90px;
      height: 90px;
      top: 27%;
      left: 45%;
    }
    @media screen and (max-width: 576px) {
      border: 12px solid rgba(221, 221, 221, 1);
      border-top: 12px solid rgba(47, 128, 237, 1);
      width: 80px;
      height: 80px;
      top: 25%;
      left: 44%;
    }
    @media screen and (max-width: 376px) {
      left: 40.5%;
    }
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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

div .m-input-wrapper.--default-border {
  border-color: rgba(235, 87, 87, 1) !important;
}

div .m-input.--has-z-2 .m-input-wrapper {
  border-color: rgba(221, 221, 221, 1) !important;

  &:hover, &:focus {
    border-color: rgba(47, 128, 237, 1) !important;
  }
}

.m-input-wrapper.--default-border {
  box-shadow: none !important;
}

.m-input-wrapper {
  border-width: 1px !important;

  transition-timing-function: linear !important;
  -webkit-transition-duration: 0s !important;
  transition-duration: 0s !important;
}

//.m-input.--md {
//  height: 40px !important;
//}

</style>
