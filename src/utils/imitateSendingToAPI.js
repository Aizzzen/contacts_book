import {showToast} from "@/utils/showToast";

export const imitateSendingToAPI = (router) => {
    const block = document.getElementById("loader-block");
    const spinner = document.getElementById("loader-spinner");
    block.className = "loader";
    spinner.className = "loader__spinner";
    setTimeout(() => {
        block.className = block.className.replace("loader", "");
        spinner.className = spinner.className.replace("loader__spinner", "");
        showToast()
        router.push("/");
    }, 3000);
}