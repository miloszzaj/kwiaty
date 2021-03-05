
const submitBtn = document.querySelector('.submitBtn')

const email = document.querySelector('.email')
const clientName = document.querySelector('.name')

const sendContactForm = function(e) {
    if(email.length >5 && email.includes('@') && email.includes('.')){
        e.preventDefault()
        // console.log("działa")
        email.classList.remove("notValid")
    }
    else {
        // console.log('nie działa')
        email.classList.add("notValid")
    }
    if(clientName.length >=2){
        e.preventDefault()
        console.log("działa")
        clientName.classList.remove("notValid")
    }
    else {
        console.log('nie działa')
        clientName.classList.add("notValid")
    }
}
submitBtn.addEventListener('click', sendContactForm)


// $(document).ready(function() {
// 	$('.submitBtn').click(function(event) {
// console.log('clicked button')

// const email = $('.email').val()
// const name = $('.name').val()
// const message = $('.messageSubmit').val()
// const statusElm = $('.status').val()
// statusElm.empty()

// if(email.length >5 && email.includes('@') && email.includes('.')){
//     statusElm.classList.add("notValid")
// } else {
//     // event.preventDefault()
//     // statusElm.append('<div>email is not valid</div>')
// }

// if(name.length>=2) {
//     statusElm.append('<div>name is valid</div>')
// } else {
//     event.preventDefault()
//     statusElm.append('<div>name is not valid</div>')
// }

// if(message.length>10) {
//     statusElm.append('<div>message is valid</div>')
// } else {
//     event.preventDefault()
//     statusElm.append('<div>message is not valid</div>')
// }
// 	})}
