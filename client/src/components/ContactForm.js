import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Trimite mesaj");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Se trimite...");
    const { name, email, query } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: query.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Trimite mesaj");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div class='form-wrap p-5 mb-5'>
      <div class='form-overlay'></div>
      <div class=" contact-form text-center">
        <p class="lead text-light">Solicită consultanță</p>
      </div>
      <div class="row justify-content-center ">
        <div class="col-lg-12">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label text-light">Nume Prenume:</label>
            <input type="text" id="name" className="form-control" required />
            <label htmlFor="email" className="form-label text-light pt-2">Adresa de e-mail:</label>
            <input type="email" id="email" className="form-control" required />
            <div>
              <label htmlFor="query" className="form-label text-light pt-2">Mesajul dvs.:</label>
              <textarea className="form-control" id="query" required></textarea>
            </div>
            <div className="my-4 text-center pt-2">
              <button type="submit" className="btn btn-light ">{status}</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default ContactForm;
