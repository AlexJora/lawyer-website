import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Trimite mesaj");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Se trimite...");
    // const { name, email, phone, query } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   phone: phone.value,
    //   message: query.value,
    // };
    // let response = await fetch("http://localhost:3100/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });

    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    // setStatus("Trimite mesaj");
    // let result = await response.json();
    // alert(result.status);
  };
  return (
    <div className='form-wrap p-5 mb-5'>
      <div className='form-overlay'></div>
      <div className=" contact-form text-center">
        <p className="lead text-light">Solicită consultanță</p>
      </div>
      <div className="row justify-content-center ">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label text-light">Nume Prenume:</label>
            <input type="text" id="name" className="form-control" required />
            <label htmlFor="email" className="form-label text-light pt-2">Adresa de e-mail:</label>
            <input type="email" id="email" className="form-control" required />
            <label htmlFor="phone" className="form-label text-light pt-2">Număr de telefon:</label>
            <input type="tel" id="phone" className="form-control" required />
            <div>
              <label htmlFor="query" className="form-label text-light pt-2">Mesajul dvs.:</label>
              <textarea className="form-control" id="query" required></textarea>
            </div>
            <div className="my-4 text-center pt-2">
              <button type="submit" className="btn btn-outline-dark ">{status}</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default ContactForm;
