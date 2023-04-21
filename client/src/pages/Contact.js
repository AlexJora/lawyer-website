import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export const Contact = () => {
  return (
    <>
      <Navbar />
      <section>
        <div style={{ backgroundColor: '#c2b697', height: '3rem', color: ' #272B2E', marginTop: '5.5rem', textAlign: "center" }}> Contact</div>
      </section>

      <section>
        <section id="contact">
          <div className="container-lg">

            <div className="text-center">
              <h2>Get in Touch</h2>
              <p className="lead">Questions to ask? Fill out the form to contact me directly...</p>
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-lg-6">

                <form>
                  <label for="email" className="form-label">Email address:</label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i className="bi bi-envelope-fill text-secondary"></i>
                    </span>
                    <input type="text" id="email" className="form-control" placeholder="e.g. mario@example.com" />

                  </div>
                  <label for="name" className="form-label">Name:</label>
                  <div className="mb-4 input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill text-secondary"></i>
                    </span>
                    <input type="text" id="name" className="form-control" placeholder="e.g. Mario" />

                  </div>

                  <div className="mb-4 mt-5 form-floating">
                    <textarea className="form-control" id="query" placeholder="query"></textarea>
                    <label for="query">Your query...</label>
                  </div>
                  <div className="mb-4 text-center">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </section>
      <Footer />
    </>
  )
}
export default Contact;