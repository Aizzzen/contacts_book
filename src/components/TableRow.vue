<template>
    <div class="contacts__table-row">
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
        height: 48px;

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

    &:not(:last-child) {
        border-bottom: 1px solid #EAF2FD;
    }
}

</style>