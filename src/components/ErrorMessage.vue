<template>
    <div class="form__validate">
        <span class="form__validate-msg">
            <div class="form__validate-msg-icon"/>
            {{ message }}
        </span>
    </div>
</template>

<script>

export default {
    name: 'error-message',
    props: {
        message: {
            type: String
        }
    }
}

</script>

<style lang="scss">

.form__validate {
  position: relative;

  &-msg {
    position: absolute;
    display: block;
    right: 0;
    color: rgba(235, 87, 87, 1);
    font-size: 10px;
    line-height: 16px;

    &-icon {
      content: url("../assets/input-error-icon.png");
      position: absolute;
      bottom: 28px;
      right: 10px;
      z-index: 1;
    }
  }
}

</style>