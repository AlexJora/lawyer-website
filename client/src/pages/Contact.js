import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export const Contact = () => {
  return (
    <>
      <Navbar />
      {/* banner */}
      <div style={{ backgroundColor: 'gray', width: '100', height: '4rem', color: 'white' }}> CONTACT</div>
      <section>
        <section id="contact">
          <div class="container-lg">

            <div class="text-center">
              <h2>Get in Touch</h2>
              <p class="lead">Questions to ask? Fill out the form to contact me directly...</p>
            </div>
            <div class="row justify-content-center my-5">
              <div class="col-lg-6">

                <form>
                  <label for="email" class="form-label">Email address:</label>
                  <div class="input-group mb-4">
                    <span class="input-group-text">
                      <i class="bi bi-envelope-fill text-secondary"></i>
                    </span>
                    <input type="text" id="email" class="form-control" placeholder="e.g. mario@example.com" />

                  </div>
                  <label for="name" class="form-label">Name:</label>
                  <div class="mb-4 input-group">
                    <span class="input-group-text">
                      <i class="bi bi-person-fill text-secondary"></i>
                    </span>
                    <input type="text" id="name" class="form-control" placeholder="e.g. Mario" />

                  </div>

                  <div class="mb-4 mt-5 form-floating">
                    <textarea class="form-control" id="query" placeholder="query"></textarea>
                    <label for="query">Your query...</label>
                  </div>
                  <div class="mb-4 text-center">
                    <button type="submit" class="btn btn-secondary">Submit</button>
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