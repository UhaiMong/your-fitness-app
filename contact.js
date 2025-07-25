// Contact us
document.addEventListener("DOMContentLoaded", function () {
  const messageSubmit = document.getElementById("messageSubmit");
  messageSubmit.addEventListener("click", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    event.preventDefault();
    console.log(name, email, message);
    alert(
      "Thanks " +
        name +
        " You will got a response to " +
        email +
        " your message: " +
        message
    );
  });
});
