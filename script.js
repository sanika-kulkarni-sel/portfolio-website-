emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(
        "service_80mxrg4",
        "template_iqth1e6",
        {

            from_name:
            document.getElementById("name").value,

            from_email:
            document.getElementById("email").value,

            message:
            document.getElementById("message").value

        }
    )

    .then(function(){

        alert("Message Sent Successfully!");

        form.reset();

    })

    .catch(function(error){

        alert("Failed To Send Message");

        console.log(error);

    });

});