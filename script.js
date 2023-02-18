const $ = (selector) => document.querySelector(selector)

$("#btn").addEventListener("click", () => {
    $("#modal").classList.remove("hidden")
})

$("#close").addEventListener("click", () => {
    $("#modal").classList.add("hidden")
})