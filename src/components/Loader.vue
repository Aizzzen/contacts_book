<template>
    <div id="loader-block">
        <div id="loader-spinner"/>
    </div>
</template>

<script>

export default {
    name: 'loader-screen'
}

</script>

<style lang="scss">

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

</style>