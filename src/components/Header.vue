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
    @media screen and (max-width: 992px) {
        padding: 0 32px 0 32px;
    }
    @media screen and (max-width: 576px) {
        padding: 0 12px 0 12px;
    }
    //@media screen and (max-width: 376px) {
    //    padding: 0 12px 0 12px;
    //}

    &__icon {
        padding-top: 7px;
        @media screen and (max-width: 576px) {
            margin-right: -10px;
        }
        @media screen and (max-width: 376px) {
            padding-top: 12px;
            margin-right: -10px;
        }

        & img {
            width: 42px;
            height: 32px;
            @media screen and (max-width: 376px) {
                width: 31px;
                height: 24px;
            }
        }
    }

    &__title {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        text-transform: uppercase;
        color: #E0E0E0;
        padding-top: 12px;
        @media screen and (max-width: 576px) {
            font-size: 14px;
            line-height: 17px;
            padding-top: 16px;
        }
        //@media screen and (max-width: 376px) {
        //    font-size: 14px;
        //    line-height: 17px;
        //    padding-top: 16px;
        //}
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
            @media screen and (max-width: 768px) {
                font-size: 14px;
                line-height: 17px;
                padding-top: 14px;
            }

            &:before {
                content: url("../assets/add-contact-icon.png");
                width: 24px;
                height: 24px;
                padding: 2px;
                position: relative;
                right: 6px;
                top: 3px;
                @media screen and (max-width: 768px) {
                    width: 16px;
                    height: 16px;
                    position: relative;
                    right: 10px;
                    top: -3px;
                }
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
            @media screen and (max-width: 768px) {
                font-size: 14px;
                line-height: 17px;
                padding-top: 14px;
            }

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
                @media screen and (max-width: 768px) {
                    width: 20px;
                    height: 20px;
                    font-size: 10px;
                    line-height: 12px;
                    padding: 3px;
                    margin-top: 0;
                }
            }
        }

        &-quit {
            display: flex;
            align-items: center;
            padding-top: 3px;

            & img {
                @media screen and (max-width: 768px) {
                    width: 14px;
                    height: 14px;
                }
            }
        }
    }
}
</style>