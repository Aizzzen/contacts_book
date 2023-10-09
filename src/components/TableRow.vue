<template>
    <div @click="handleOpenContact(row_data.id)" class="contacts__table-row">
        <div class="row__icon">{{ row_data.fullName[0] }}</div>
        <div class="row__fullName">{{ row_data.fullName }}</div>
        <div class="row__phone">{{ row_data.phone }}</div>
        <div class="row__email">{{ row_data.email }}</div>
        <div class="row__date">{{ row_data.created_at }}</div>
    </div>
</template>

<script>
export default {
    name: "contacts-table-row",
    props: {
        row_data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
        handleOpenContact(id) {
            this.$router.push(`/form/${id}`)
        }
    }
}
</script>

<style lang="scss">

.contacts__table-row {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #545454;

    margin-top: 25px;

    & div {
        &:not(:first-child) {
            height: 48px;
        }

        &:nth-child(2) {
            min-width: 264px;
            width: 100%;
        }

        &:nth-child(3) {
            min-width: 112px;
            width: 100%;
        }

        &:nth-child(4) {
            min-width: 208px;
            width: 100%;
        }

        &:nth-child(5) {
            min-width: 112px;
            text-align: right;
            width: 100%;
        }
    }

    &:not(:last-child) {
        border-bottom: 1px solid #EAF2FD;
    }
}

.row__icon {
    width: 24px;
    height: 24px;
    font-size: 12px;
    font-weight: 700;
    line-height: 9px;
    border-radius: 20px;
    background-color: rgba(255, 199, 0, 1);

    padding: 7px;
    text-align: center;
    align-items: center;
    margin-right: 8px;
}

</style>