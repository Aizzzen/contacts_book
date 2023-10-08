<template>
    <app-header
        :isFormPage="true"
    />
    <section class="form__page">
        <div class="form__block">
            <Form v-slot="{ errors }" @submit="handleSubmit">
                <div class="form__name">Новый контакт</div>
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
                    <custom-select
                            :isLong="true"
                            :category="formData.category"
                            @update-category="updateCategory"
                    />
                </div>
                <button class="form__button" type="submit">Сохранить</button>
            </Form>
            <div class="iconsss"></div>
        </div>
    </section>
</template>

<script>
import {mapMutations} from "vuex";
import AppHeader from "@/components/Header.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import {Form, Field} from "vee-validate";

export default {
    name: 'form-page',
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
                category: "Не выбрано",
            }
        }
    },
    methods: {
        ...mapMutations([
            "ADD_CONTACT_DATA"
        ]),
        formatDate(date) {
            let dd = date.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;

            return dd + '.' + mm + '.' + yy;
        },
        formatPhoneNumber(phoneNumber) {
            return `${phoneNumber.slice(0, 2)}(${phoneNumber.slice(2, 5)})${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`
        },
        async handleSubmit() {
            const newContact = {
                id: Math.floor(Math.random() * 100000),
                ...this.formData,
                phone: this.formatPhoneNumber(this.formData.phone),
                created_at: this.formatDate(new Date())
            }
            this.ADD_CONTACT_DATA(newContact)
            this.$router.push("/");
        },
        updateCategory(newName) {
            this.formData.category = newName;
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
        letter-spacing: 0em;
        text-align: left;
        position: relative;
        bottom: 24px;
        color: rgba(84, 84, 84, 1);
    }

    &__page {
        height: 94.5vh;
        background: #EAF2FD;
    }

    &__block {
        width: 704px;
        height: 455px;
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
            font-size: 14px;
            font-weight: 700;
            line-height: 17px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(84, 84, 84, 1);
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

        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        text-transform: uppercase;
        color: rgba(84, 84, 84, 1);

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
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;

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