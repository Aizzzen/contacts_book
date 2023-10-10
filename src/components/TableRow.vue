<template>
    <div v-if="window.outerWidth <= 576" @click="handleOpenContact(row_data.id)" class="contacts__table-row">
        <div style="display: flex">
            <div v-if="window.outerWidth > 376" :style="row_data.fullName.length < 20 && 'margin-top: 3px;'" class="row__icon">{{ row_data.fullName[0] }}</div>
            <div v-if="window.outerWidth > 376" :style="row_data.fullName.length < 20 && 'padding-top: 5px;'" class="row__fullName">{{ row_data.fullName }}</div>
            <div v-else :style="row_data.fullName.length < 23 && 'padding-top: 5px;'" class="row__fullName">{{ row_data.fullName }}</div>
        </div>
        <div>
            <div class="row__phone">{{ row_data.phone }}</div>
            <div class="row__email">{{ row_data.email }}</div>
        </div>
        <div class="row__date">{{ row_data.created_at }}</div>
    </div>
    <div v-else @click="handleOpenContact(row_data.id)" class="contacts__table-row">
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
    color: #545454;

    margin-top: 25px;

    @media screen and (max-width: 576px) {
        margin-top: 10px;
    }

    & div {
        &:not(:first-child) {
            height: 48px;
        }

        &:nth-child(2) {
            min-width: 264px;
            width: 100%;
        }
        @media screen and (max-width: 768px) {
            &:nth-child(2) {
                min-width: 208px;
            }
        }
        @media screen and (max-width: 576px) {
            &:nth-child(1) {
                min-width: 184px;
                .row__icon {
                    min-width: 24px;
                    margin-top: 3px;
                }
                .row__fullName {
                    min-width: 100px;
                    width: 100%;
                    padding-right: 20px;
                    @media screen and (max-width: 376px) {
                        padding-right: 0;
                    }
                }
            }
            &:nth-child(2) {
                min-width: 240px;
            }
            &:nth-child(3) {
                min-width: 112px;
                padding-top: 5px;
                text-align: right;
            }
        }

        @media screen and (max-width: 376px) {
            &:nth-child(1) {
                min-width: 143px;
            }
            &:nth-child(2) {
                min-width: 143px;
            }
        }

        &:nth-child(3) {
            min-width: 112px;
            width: 100%;
            @media screen and (max-width: 376px) {
                min-width: 58px;
                text-align: right;
            }
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
    position: relative;
    width: 24px;
    height: 24px;
    font-size: 12px;
    font-weight: 700;
    line-height: 9px;
    border-radius: 20px;
    background-color: rgba(255, 199, 0, 1);
    padding: 7px 8px 8px;
    margin-right: 8px;
}

</style>