export const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber[2] === "(") {
        return phoneNumber.split("").filter(item => {
            if (item !== "(" && item !== ")" && item !== "-") {
                return item
            }
        }).join("")
    } else {
        return `${phoneNumber.slice(0, 2)}(${phoneNumber.slice(2, 5)})${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`
    }
}