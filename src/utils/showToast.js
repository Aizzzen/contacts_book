export const showToast = () => {
    const x = document.getElementById("toast-message-block");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}