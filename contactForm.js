
const submitBtn = document.querySelector('.submitBtn')

const email = document.querySelector('.email')
const statusEmail = document.querySelector('.statusEmail')

const clientName = document.querySelector('.name')
const statusName = document.querySelector('.statusName')

const sendContactForm = function(e) {
    e.preventDefault()
    if(email.value.length >5 && email.value.includes('@') && email.value.includes('.')){
        statusEmail.classList.remove("notValid")
    }
    else {
        statusEmail.classList.add("notValid")
    }
    if(clientName.value.length >=2){
        statusName.classList.remove("notValid")
    }
    else {
        statusName.classList.add("notValid")
    }
}
submitBtn.addEventListener('click', sendContactForm)
