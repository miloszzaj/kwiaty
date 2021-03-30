
const submitBtn = document.querySelector('.submitBtn')

const email = document.querySelector('.email')
const statusEmail = document.querySelector('.statusEmail')

const clientName = document.querySelector('.name')
const statusName = document.querySelector('.statusName')

const sendContactForm = function(e) {
    e.preventDefault()
    if(email.value.length >5 && email.value.includes('@') && email.value.includes('.')){
        statusEmail.classList.add("hidden")
    }
    else {
        statusEmail.classList.remove("hidden")
    }
    if(clientName.value.length >=2){
        statusName.classList.add("hidden")
    }
    else {
        statusName.classList.remove("hidden")
    }
}
submitBtn.addEventListener('click', sendContactForm)
