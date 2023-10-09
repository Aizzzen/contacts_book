<template>
    <app-header
        :isFormPage="true"
        :fullName="formData.fullName"
    />
    <section class="form__page">
        <div class="form__block">
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
                        <Field
                            as="input"
                            name="phone"
                            rules="required"
                            v-model.trim="formData.phone"
                            type="tel"
                            placeholder="+7(___)-___-__-__"
                            :style="errors.phone ? 'border-color: rgba(235, 87, 87, 1); --placeholder-color: rgba(235, 87, 87, 1)' : ''"
                            maxlength="12"
                        />
                        <div v-if="errors.phone" class="form__validate">
                            <span class="form__validate-msg">
                                <div class="form__validate-msg-icon"/>
                            {{ errors.phone }}
                        </span>
                        </div>
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
                    <div style="margin-top: -7px; margin-bottom: 7px">
                        <custom-select
                            :category="formData.category"
                            :isLong="true"
                            :isEmpty="isEmpty"
                            @not-empty="isNotEmpty"
                            @update-category="updateCategory"
                        />
                        <div v-if="isEmpty" class="form__validate" style="top: 5px">
                            <span class="form__validate-msg">
                                <div class="form__validate-msg-icon"/>
                            Поле не может быть пустым
                        </span>
                        </div>
                    </div>
                </div>
                <div class="form__input" style="justify-content: normal">
                    <label for="date">Создан</label>
                    <div class="form__input-date">
                        {{ formData.date }}
                    </div>
                </div>

                <button class="form__button" type="submit">Сохранить</button>
            </Form>
        </div>
    </section>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
import AppHeader from "@/components/Header.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import {Form, Field} from "vee-validate";
import {showToast} from "@/customToast";
import store from "@/store";
// import {formatPhoneNumber} from "@/utils/formatPhoneNumber";
// import {formatDate} from "@/utils/formatDate";

export default {
    name: 'form-edit-page',
    components: {
        AppHeader,
        CustomSelect,
        Form,
        Field
    },
    data() {
        return {
            formData: {
                fullName: "",
                phone: "",
                email: "",
                category: "",
                date: "",
            },
            isEmpty: false
        }
    },
    mounted() {
        const dataFromStore = store.getters.CONTACT_BY_ID(Number(this.$route.params.id));
        console.log(dataFromStore)
        this.formData.fullName = dataFromStore.fullName;
        this.formData.phone = dataFromStore.phone;
        this.formData.email = dataFromStore.email;
        this.formData.category = dataFromStore.category;
        this.formData.date = dataFromStore.created_at;
    },
    methods: {
        ...mapMutations([
            "ADD_CONTACT_DATA"
        ]),
        ...mapGetters([
            "CONTACT_BY_ID"
        ]),
        async handleSubmit() {
            if (this.formData.category === "Не выбрано") {
                this.isEmpty = true
            } else {
                // const newContact = {
                //     id: Math.floor(Math.random() * 100000),
                //     ...this.formData,
                //     phone: formatPhoneNumber(this.formData.phone),
                //     created_at: formatDate(new Date())
                // }
                // this.ADD_CONTACT_DATA(newContact)
                // this.$router.push("/");
                showToast('Контакт успешно изменён')
            }
        },
        updateCategory(newName) {
            this.formData.category = newName;
        },
        isNotEmpty(newValue) {
            this.isEmpty = newValue;
        }
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
    }

    &__page {
        height: 94.5vh;
        background: #EAF2FD;
    }

    &__block {
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

        & label {
            font-weight: 700;
            line-height: 17px;
        }

        & input {
            width: 408px;
            height: 40px;
            padding: 8px;
            border-radius: 4px;
            outline: none;
            border: 1px solid rgba(221, 221, 221, 1);

            --placeholder-color: #999999;

            &::placeholder {
                color: var(--placeholder-color);
            }

            &:hover, &:focus {
                border: 1px solid rgba(47, 128, 237, 1);
            }
        }

        &:not(:last-child) {
            margin-bottom: 16px;
        }

        &-date {
            cursor: default;
            height: 40px;
            padding: 11px;
            position: relative;
            left: 117px;
        }
    }

    &__button {
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

    &__validate {
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
            }
        }
    }
}

</style>