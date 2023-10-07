<template>
    <header v-if="isFormPage" class="header">
        <div class="header__form-title">Добавить контакт</div>
        <div class="header__form-quit">
            <router-link to="/">
                <img src="../assets/form-quit-icon.png" alt="">
            </router-link>
        </div>
    </header>
    <header v-else class="header">
        <div class="header__icon">
            <img src="../assets/contacts-logo.png" alt="">
        </div>
        <div class="header__title">Книга контактов</div>
    </header>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        isFormPage: {
            type: Boolean,
            default: () => {
                return false;
            }
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    background-color: #282828;
    height: 48px;
    padding: 0 48px 0 48px;
    gap: 16px;

    &__icon {
        padding-top: 7px;

        & img {
            width: 42px;
            height: 32px;
        }
    }

    &__title {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        text-transform: uppercase;
        color: #E0E0E0;
        padding-top: 12px;
    }

    &__form {
        &-title {
            display: flex;
            margin: 0 auto;
            align-items: center;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0em;
            color: rgba(221, 221, 221, 1);

            &:before {
                content: url("../assets/add-contact-icon.png");
                width: 24px;
                height: 24px;
                padding: 2px;
                position: relative;
                right: 6px;
                top: 3px;
            }
        }

        &-quit {
            display: flex;
            align-items: center;
        }
    }
}
</style>