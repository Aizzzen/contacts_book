<template>
    <div class="contacts__table">
        <div class="contacts__table-header">
            <p>контакт</p>
            <p>телефон</p>
            <p>e-mail</p>
            <p>создан</p>
        </div>
        <div class="contacts__table-body">
            <contacts-table-row
                v-for="row in contacts_data"
                :key="row.id"
                :row_data="row"
            />
        </div>
    </div>
</template>

<script>
import ContactsTableRow from "@/components/TableRow.vue";

export default {
    name: 'contacts-table',
    components: {
        ContactsTableRow
    },
    props: {
        contacts_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>

<style lang="scss">

.contacts {
    cursor: default;

    &__table {
        margin-top: 10px;

        &-header {
            display: flex;
            height: 24px;
            padding-top: 8px;
            padding-bottom: 8px;
            text-transform: uppercase;

            margin-bottom: 10px;

            & p {
                font-size: 10px;
                line-height: 16px;
                color: #B5B5B5;

                &:nth-child(1) {
                    min-width: 296px;
                    width: 100%;
                }

                &:nth-child(2) {
                    min-width: 112px;
                    width: 100%;
                }

                &:nth-child(3) {
                    min-width: 208px;
                    width: 100%;
                }

                &:nth-child(4) {
                    min-width: 112px;
                    text-align: right;
                    width: 100%;
                }
            }
        }

        &-body {
            cursor: pointer;
        }
    }
}

</style>