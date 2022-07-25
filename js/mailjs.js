// EmailJS 
(function() {
emailjs.init("w_AOIi5dYdQw563MZ");
})();

function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("senderName").value,
        to_name: document.getElementById("senderEmail").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
// service ID , template ID you shall take from  your account Emailjs 
    emailjs.send('service_kq0muba', 'template_7uqtt2v', tempParams)
              .then(function (res) {
                console.log("success!", res.status, res.text);  
  
        }) 
}


/***Reseting the form  */
    const form = document.getElementById('myForm');

     form.addEventListener('submit', function handleSubmit(event) {
      event.preventDefault();

     form.reset();
         });
/**validate function**/

function validate() {
  
  let from_name = document.querySelector(".username")
  let to_name = document.querySelector(".email")
  let subject = document.querySelector(".subject")
  let message = document.querySelector(".message")
  let submit = document.querySelector(".submit")
    
  submit.addEventListener("click", (e) => {
    e.preventDefault()
    
    if (from_name.value == "" || to_name.value == "" || subject.value == "" || message.value == "") {
      
      inputempty();
    }
    else {
      sendMail(from_name.value, to_name.value, subject.value, message.value)
      success();
      console.log("email sent")
    }
     form.reset();
  });
}

validate();


function success() {
  swal({
  title: "Mesajınız gönderildi!",
  text: "En kısa zamanda dönüş yapılacak!",
  icon: "success",
  button: "Aww yiss!",
});
}

function error() {
  swal({
  title: "Error!",
  text: "Hata verildi!",
  icon: "error",
  button: "ok!",
});
}

function inputempty() {
  swal({
  title: "Oops...!!",
  text: "Boşlukları doldurun!",
  icon: "error",
  button: "ok!",
});
}


