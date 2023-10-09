import {useToast} from "vue-toastification";

const toast = useToast();
export const showToast = (content) => {
    toast(content, {
        toastClassName: "my-custom-toast-class",
        position: "bottom-left",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: false,
        rtl: false,
    });
}
