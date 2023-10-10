<template>
    <button class="form__button" type="submit">Сохранить</button>
</template>

<script>
export default {
    name: 'form-save-button',
}
</script>

<style lang="scss">

.form__button {
    width: 136px;
    height: 40px;
    padding: 12px 16px 12px 16px;
    border-radius: 4px;
    margin-top: 24px;
    background: rgba(255, 199, 0, 1);
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;
    overflow: hidden;
    position: relative;
    left: 168px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 14px;
    }

    @media screen and (max-width: 576px) {
        margin-top: 12px !important;
    }

    &:before {
        content: url("../assets/save-icon.png");
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }

    &:hover {
        background: rgba(255, 216, 76, 1);
    }

    &:active {
        background: rgba(243, 196, 30, 1);
    }
}

</style>