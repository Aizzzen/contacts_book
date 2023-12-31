<template>
    <app-header
        :isFormPage="true"
        :fullName="formData.fullName"
    />
    <section class="form__page">
        <div class="form__block-edit">
            <Form v-slot="{ errors }" @submit="handleSubmit">
                <div class="form__name">Контакт</div>
                <div class="form__input">
                    <label for="fullName">Имя</label>
                    <div>
                        <Field
                            as="input"
                            name="fullName"
                            rules="required|min:3"
                            v-model.trim="formData.fullName"
                            type="text"
                            placeholder='Например "Андрей"...'
                            :style="errors.fullName ? 'border-color: rgba(235, 87, 87, 1); --placeholder-color: rgba(235, 87, 87, 1)' : ''"
                            class="form__input-input"
                        />
                        <div v-if="errors.fullName" class="form__validate">
                            <span class="form__validate-msg">
                                <div class="form__validate-msg-icon"/>
                            {{ errors.fullName }}
                        </span>
                        </div>
                    </div>
                </div>
                <div class="form__input">
                    <label for="phone">Телефон</label>
                    <div>
                        <MazPhoneNumberInput
                            v-model="formData.phone"
                            color="transparent"
                            :onlyCountries="['RU']"
                            :no-search="true"
                            :noCountrySelector="true"
                            :noExample="true"
                            :translations="{
                              phoneInput: {
                                placeholder: '',
                                example: '',
                              },
                            }"
                            @update="results = $event"
                            :success="results?.isValid"
                            class="form__input-phone"
                            maxLength="16"
                        />
                        <error-message
                            name="error"
                            v-if="formData.phone === undefined || phoneErrorMsg"
                            :message="phoneErrorMsg ? 'Некорректный номер' : 'Поле не может быть пустым'"
                        />
                    </div>
                </div>
                <div class="form__input">
                    <label for="email">E-mail</label>
                    <div>
                        <Field
                            as="input"
                            name="email"
                            rules="required|email"
                            v-model.trim="formData.email"
                            type="email"
                            placeholder="Например pochta@domain.ru"
                            :style="errors.email ? 'border-color: rgba(235, 87, 87, 1); --placeholder-color: rgba(235, 87, 87, 1)' : ''"
                            class="form__input-input"
                        />
                        <div v-if="errors.email" class="form__validate">
                            <span class="form__validate-msg">
                                <div class="form__validate-msg-icon"/>
                            {{ errors.email }}
                        </span>
                        </div>
                    </div>
                </div>
                <div class="form__input">
                    <label for="input">Категория</label>
                    <div :style="window.outerWidth <= 376 ? 'margin-top: 0; margin-bottom: 0' : 'margin-top: -7px; margin-bottom: 7px'">
                        <custom-select
                            :category="formData.category"
                            :isLong="true"
                            :isSelectEmpty="isSelectEmpty"
                            @not-empty="isNotEmpty"
                            @update-category="updateCategory"
                        />
                        <error-message
                            name="error"
                            v-if="isSelectEmpty"
                            :message="'Поле не может быть пустым'"
                            style="top: 7px"
                        />
                    </div>
                </div>
                <div class="form__input" style="justify-content: normal">
                    <label for="date">Создан</label>
                    <div class="form__input-date">
                        {{ formData.created_at }}
                    </div>
                </div>
                <div>
                    <form-save-button :class="window.outerWidth <= 376 && 'left22'"/>
                    <button type="button" class="form__button_delete" @click="deleteContact(formData.id)">Удалить контакт</button>
                </div>
            </Form>
        </div>
    </section>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import {Form, Field} from "vee-validate";
import store from "@/store";
import AppHeader from "@/components/Header.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import FormSaveButton from "@/components/FormSaveButton.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import {formatPhoneNumber} from "@/utils/formatPhoneNumber";
import {imitateSendingToAPI} from "@/utils/imitateSendingToAPI";

export default {
    name: 'form-edit-page',
    components: {
        FormSaveButton,
        AppHeader,
        CustomSelect,
        Form,
        Field,
        MazPhoneNumberInput,
        ErrorMessage
    },
    data() {
        return {
            formData: {
                id: "",
                fullName: "",
                phone: "",
                email: "",
                category: "",
                created_at: "",
            },
            isSelectEmpty: false,
            results: "",
            phoneErrorMsg: false
        }
    },
    mounted() {
        const dataFromStore = store.getters.CONTACT_BY_ID(Number(this.$route.params.id));
        this.formData.id = dataFromStore.id;
        this.formData.fullName = dataFromStore.fullName;
        this.formData.phone = formatPhoneNumber(dataFromStore.phone);
        this.formData.email = dataFromStore.email;
        this.formData.category = dataFromStore.category;
        this.formData.created_at = dataFromStore.created_at;
    },
    methods: {
        ...mapActions([
            "UPDATE_CONTACT",
            "DELETE_CONTACT",
            "CREATE_TOAST_MESSAGE"
        ]),
        ...mapGetters([
            "CONTACT_BY_ID"
        ]),
        async handleSubmit() {
            if (this.formData.category === "Не выбрано" && this.formData.phone.length < 12) {
                this.isEmpty = true
                this.phoneErrorMsg = true
            } else if (this.formData.category === "Не выбрано") {
                this.isEmpty = true
            } else if (this.formData.phone.length < 12) {
                this.phoneErrorMsg = true
            } else {
                const updatedContact = {
                    ...this.formData,
                    phone: formatPhoneNumber(this.formData.phone)
                }
                this.UPDATE_CONTACT(updatedContact)
                this.CREATE_TOAST_MESSAGE("Контакт успешно изменён")
                await imitateSendingToAPI(this.$router)            }
        },
        updateCategory(newName) {
            this.formData.category = newName;
        },
        isNotEmpty(newValue) {
            this.isSelectEmpty = newValue;
        },
        async deleteContact(contactId) {
            this.DELETE_CONTACT(contactId)
            this.CREATE_TOAST_MESSAGE("Контакт удалён")
            await imitateSendingToAPI(this.$router)
        },
    },
}
</script>

<style lang="scss">

.form {
    &__name {
        font-size: 32px;
        font-weight: 700;
        line-height: 39px;
        position: relative;
        bottom: 24px;

        @media screen and (max-width: 768px) {
            font-size: 24px;
            line-height: 29px;
        }
    }

    &__page {
        height: 94.5vh;
        background: #EAF2FD;

        @media screen and (max-width: 768px) {
            height: 94vh;
        }
    }

    &__block-edit {
        width: 704px;
        height: 511px;
        display: flex;
        margin: 0 auto;
        gap: 32px;
        background: #ffffff;
        box-shadow: 0 0 6px 0 rgba(148, 181, 225, 0.35);
        position: relative;
        top: 20px;
        padding: 64px;
        @media screen and (max-width: 576px) {
            width: 552px !important;
            height: 461px !important;
            padding: 48px !important;
        }
        @media screen and (max-width: 376px) {
            width: 352px !important;
            padding: 48px 20px 48px 20px !important;
        }

        & form {
            display: flex;
            flex-direction: column;
        }
    }

    &__input {
        width: 576px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 576px) {
            width: 456px !important;
        }
        @media screen and (max-width: 376px) {
            width: 312px !important;
        }

        & label {
            font-weight: 700;
            line-height: 17px;
        }

        &-input {
            width: 408px;
            height: 40px;
            padding: 8px;
            border-radius: 8px;
            outline: none;
            border: 1px solid rgba(221, 221, 221, 1);
            --placeholder-color: #999999;
            &::placeholder {
                color: var(--placeholder-color);
            }
            &:hover, &:focus {
                border: 1px solid rgba(47, 128, 237, 1);
            }
            @media screen and (max-width: 576px) {
                width: 288px !important;
            }
            @media screen and (max-width: 376px) {
                width: 228px !important;
            }
        }

        &:not(:last-child) {
            margin-bottom: 16px;
        }

        &-phone {
            width: 408px;
            height: 40px;
            outline: none;
            --placeholder-color: #999999;
            box-shadow: none;
            &::placeholder {
                color: var(--placeholder-color);
            }
            @media screen and (max-width: 576px) {
                width: 288px !important;
            }
            @media screen and (max-width: 376px) {
                width: 228px !important;
            }
        }

        &-date {
            cursor: default;
            height: 40px;
            padding: 11px;
            position: relative;
            left: 117px;
            @media screen and (max-width: 376px) {
                left: 39px;
            }
        }
    }

    &__button_delete {
        position: relative;
        left: 200px;
        border: none;
        background: none;
        color: rgba(47, 128, 237, 1);
        font-size: 12px;
        line-height: 15px;
        cursor: pointer;

        &:before {
            content: url("../assets/delete-icon.png");
            margin-right: 4px;
        }

        @media screen and (max-width: 376px) {
            left: 45px;
        }
    }
}

.left22 {
    left: 22px;
}

</style>