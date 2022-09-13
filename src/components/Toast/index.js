import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

const Toast = (text, type) => {
  return Toastify({
    text: text,
    duration: 3000,
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of index on hover
    style: {
      background: type === "error" ? "red" : "green",
    },
  }).showToast()
}
export default Toast
