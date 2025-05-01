function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

//template_yh5gunv (template ID)
//service_jzyrj37 (Service ID)
//kPEFGuFtb8x67RZbI (Public Key)

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    //Loading State
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_jzyrj37",
      "template_yh5gunv",
      event.target,
      "kPEFGuFtb8x67RZbI"
    );

    //Succcess State
    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden");
    alert(
      "An error has occured. Please try again later or contact me immediately at kspears27@icloud.com"
    );
  }
}
