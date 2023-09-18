import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [status, setStatus] = useState("Trimite mesaj");

  const sendMail = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const queryInput = document.getElementById("query");

    const params = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      message: queryInput.value,
    };

    const serviceID = "service_5a3ti46";
    const templateID = "template_1kdj04j";
    const userID = "W_5JcMYz9DSqwaApi";

    emailjs.send(serviceID, templateID, params, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Trimite mesaj");
        alert("Mesajul tău a fost trimis cu succes!");

        // Clear input fields after successful submission
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        queryInput.value = "";
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus("Trimite mesaj");
        alert("Ceva nu a mers bine. Încearcă din nou mai târziu.");
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Se trimite...");

    sendMail();
  };

  return (
    <div className="form-wrap p-5 mb-5">
      <div className="form-overlay"></div>
      <div className="contact-form text-center">
        <p className="lead text-light">Solicită consultanță</p>
      </div>
      <div className="row justify-content-center ">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label text-light">
              Nume Prenume:
            </label>
            <input type="text" id="name" className="form-control" required />
            <label htmlFor="email" className="form-label text-light pt-2">
              Adresa de e-mail:
            </label>
            <input type="email" id="email" className="form-control" required />
            <label htmlFor="phone" className="form-label text-light pt-2">
              Număr de telefon:
            </label>
            <input type="tel" id="phone" className="form-control" required />
            <div>
              <label htmlFor="query" className="form-label text-light pt-2">
                Mesajul dvs.:
              </label>
              <textarea className="form-control" id="query" required></textarea>
            </div>
            <div className="my-4 text-center pt-2">
              <button
                type="submit"
                className="btn btn-outline-dark"
                aria-label="Trimite mesaj"
              >
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
