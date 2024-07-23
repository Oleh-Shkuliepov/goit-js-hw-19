// Описаний у документації
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector("input[name=delay]")

const form = document.querySelector(".form")

function handleSubmit(event) {
    event.preventDefault()

    const state = document.querySelector('input[name="state"]:checked').value;
    const delay = Number(delayInput.value);

    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay)
            } else if (state === "rejected") {
                reject(delay)
            }
        }, delay)

    })
        .then(value => iziToast.success({
            position: "topRight",
            messageColor: "white",
            backgroundColor: "green",
            message: `✅ Fulfilled promise in ${value}ms`
        }))
        .catch(value => iziToast.error({
            position: "topRight",
            messageColor: "white",
            backgroundColor: "red",
            message: `❌ Rejected promise in ${value}ms`
        }))

}

form.addEventListener("submit", handleSubmit)