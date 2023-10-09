<template>
    <app-header/>
    <section class="subheader">
        <div class="container" style="display: flex; justify-content: space-between">
            <custom-select
                :isLong="false"
                @sort-by-category="sortByCategory"
            />
            <router-link to="/form">
                <button class="subheader__button">Добавить контакт</button>
            </router-link>
        </div>
    </section>
    <section class="contacts">
        <div class="container">
            <contacts-table
                    :contacts_data="category ? sortedContacts : CONTACTS"
            />
        </div>
    </section>
</template>

<script>
import CustomSelect from "@/components/CustomSelect.vue";
import ContactsTable from "@/components/Table.vue";
import {mapGetters} from "vuex";
import AppHeader from "@/components/Header.vue";

export default {
    name: "main-page",
    components: {
        AppHeader,
        ContactsTable, CustomSelect
    },
    data() {
        return {
            category: "",
            sortedContacts: []
        }
    },
    methods: {
        sortByCategory(categoryName) {
            if (categoryName === "Все") {
                this.category = ""
            } else {
                this.category = categoryName;
                this.sortedContacts = this.CONTACTS.filter(item => {
                    if (item.category === this.category) {
                        return item
                    }
                })
            }
        },
    },
    computed: {
        ...mapGetters([
            "CONTACTS"
        ])
    }
}
</script>

<style lang="scss">

.subheader {
  height: 56px;
  background: linear-gradient(0deg, #EAF2FD, #EAF2FD),
  linear-gradient(0deg, #F9FCFF, #F9FCFF);
  border: 1px solid #EAF2FD;

  &__button {
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 12px;
    background: transparent;
    width: 175px;
    height: 32px;
    padding: 8px 16px 8px 16px;
    border-radius: 28px;
    border: 1px solid #2F80ED;
    gap: 4px;

    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    color: #2F80ED;
    text-transform: uppercase;

    &:hover {
      -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    }

    &:before {
      content: url("../assets/plus-icon.png");
      width: 16px;
      height: 16px;
      position: relative;
      top: 15%;
      right: 4%;
    }
  }
}

</style>