export const showToast = () => {
    const x = document.getElementById("toast-message-block");
    if (window.outerWidth <= 576) {
        x.className = "show_mobile";
        setTimeout(function(){ x.className = x.className.replace("show_mobile", ""); }, 3000);
    } else {
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}