const ctaForm = document.getElementById("sign-up")
const ctaInput = document.querySelector("input")
const ctaError = document.getElementById("error")

function validateEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(input).toLowerCase())
}

ctaForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!validateEmail(ctaInput.value)) {
    ctaError.classList.remove("hidden")
  } else {
    alert("Thanks for signing up!")
  }
})

ctaInput.addEventListener("keypress", () => {
  ctaError.classList.add("hidden")
})
