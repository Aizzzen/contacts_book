<template>
    <app-header
        :isFormPage="true"
    />
    <section class="form__page">
        <div class="form__block">
            <form @submit.prevent="handleSubmit" action="">
                <div class="form__name">Новый контакт</div>
                <div class="form__input">
                    <label for="input">Имя</label>
                    <input v-model.trim="formData.fullName" type="text" placeholder='Например "Андрей"...' />
                </div>
                <div class="form__input">
                    <label for="input">Телефон</label>
                    <input v-model.trim="formData.phone" type="text"/>
                </div>
                <div class="form__input">
                    <label for="input">E-mail</label>
                    <input v-model.trim="formData.email" type="email" placeholder="Например pochta@domain.ru"/>
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
            </form>
        </div>
    </section>
</template>

<script>
import CustomSelect from "@/components/CustomSelect.vue";
import {mapGetters, mapMutations} from "vuex";
import AppHeader from "@/components/Header.vue";
export default {
    name: 'form-page',
    components: {
        AppHeader,
        CustomSelect,
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
    // delete
    computed: {
        ...mapGetters([
            "CONTACTS"
        ])
    },
    methods: {
        ...mapMutations([
            "ADD_CONTACT_DATA"
        ]),
        handleSubmit(event) {
            this.ADD_CONTACT_DATA({
                id: Math.floor(Math.random() * 100000),
                ...this.formData,
                created_at: new Date().toLocaleString("ru", {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    timezone: 'UTC'
                })
            })
            console.log(this.CONTACTS)
            this.$router.push("/");
            event.target.reset();
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
}

</style>