function SendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message"),
  };
  emailjs
    .send("service_tp7oeuo", "template_lwawozv", params)
    .then(function (res) {
      toast.success("Nachricht gesendet!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
}
