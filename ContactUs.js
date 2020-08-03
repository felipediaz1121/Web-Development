$(document).ready(function(){
    $('.submit').click(function(event){
        console.log('Clicked Button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')

        if(email.length >= 10  && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2 ){
            statusElm.append('<div>Subject is valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length > 1 ){
            statusElm.append('<div>Message is valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }

        if(document.getElementById('answer_yes').checked || document.getElementById('answer_no').checked){
            statusElm.append('<div>A button was clicked</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>A button must be clicked</div>')
        }
    })
})