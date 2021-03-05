$(document).ready(function() {
	$('.submitBtn').click(function(event) {
console.log('clicked button')

const email = $('.email').val()
const name = $('.name').val()
const message = $('.messageSubmit').val()
const statusElm = $('.status')
statusElm.empty()

if(email.length >5 && email.includes('@') && email.includes('.')){
    statusElm.append('<div>email is valid</div>')
} else {
    event.preventDefault()
    statusElm.append('<div>email is not valid</div>')
}

if(subject.length>=2) {
    statusElm.append('<div>subject is  valid</div>')
} else {
    event.preventDefault()
    statusElm.append('<div>subject is not valid</div>')
}

if(message.length>10) {
    statusElm.append('<div>message is valid</div>')
} else {
    event.preventDefault()
    statusElm.append('<div>message is not valid</div>')
}
	})
    })