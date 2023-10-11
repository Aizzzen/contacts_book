<template>
    <div id="toast-message-block">{{ message }}</div>
</template>

<script>

export default {
    name: 'toast-message',
    props: {
        message: {
            type: String
        }
    },
}

</script>

<style>
    #toast-message-block {
        visibility: hidden;
        min-width: 150px;
        color: #fff;
        text-align: center;
        position: fixed;
        z-index: 1;
        left: 32px;
        bottom: 48px;

        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 16px 0 rgba(176, 197, 222, 0.5);
        height: 56px;
        padding: 12px 12px 16px 8px;
        border-radius: 4px;
        gap: 12px;
        font-size: 14px;
        line-height: 22px;
        color: rgba(84, 84, 84, 1);
        cursor: default;

        &:before {
            content: url("../assets/toast-success.png");
            position: relative;
            top: 5px;
            margin-right: 8px;
        }
    }

    #toast-message-block.show {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
        from {bottom: 48px; left: -300px; opacity: 0;}
        to {bottom: 48px; left: 32px; opacity: 1;}
    }

    @keyframes fadein {
        from {bottom: 48px; left: -300px; opacity: 0;}
        to {bottom: 48px; left: 32px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {bottom: 48px; left: 32px; opacity: 1;}
        to {bottom: 48px; left: -300px; opacity: 0;}
    }

    @keyframes fadeout {
        from {bottom: 48px; left: 32px; opacity: 1;}
        to {bottom: 48px; left: -300px; opacity: 0;}
    }
</style>
