emailinput = document.getElementById('email-input');
submit_btn = document.getElementById('emailbtn')

submit_btn.addEventListener('click', function(){ 
    if(emailinput.value==="" || emailinput.value===null){
        alert('Invalid E-mail')
    } else{
        alert('Email succesfully sent to '+emailinput.value)
    }
});