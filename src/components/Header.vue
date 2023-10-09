<template>
    <header v-if="isFormPage" class="header">
        <div v-if="fullName" class="header__form-fullName">
            <div class="header__form-fullName_first-letter">{{ fullName[0] }}</div>
            {{ fullName }}
        </div>
        <div v-else class="header__form-title">Добавить контакт</div>
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
        },
        fullName: {
            type: String,
            default: () => {
                return "";
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
        text-transform: uppercase;
        color: #E0E0E0;
        padding-top: 12px;
    }

    &__form {
        &-title {
            display: flex;
            margin: 0 auto;
            padding-top: 8px;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
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

        &-fullName {
            display: flex;
            margin: 0 auto;
            padding-top: 8px;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            color: rgba(221, 221, 221, 1);

            &_first-letter {
                position: relative;
                width: 24px;
                height: 24px;
                font-size: 12px;
                font-weight: 700;
                line-height: 9px;
                border-radius: 20px;
                background-color: rgba(255, 199, 0, 1);
                padding: 7px;
                text-align: center;
                margin-top: 2px;
                margin-right: 8px;
            }
        }

        &-quit {
            display: flex;
            align-items: center;
            padding-top: 3px;
        }
    }
}
</style>