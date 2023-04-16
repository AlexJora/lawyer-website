import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-xxl">
          {/* navbar brand / title */}
          <a class="navbar-brand" href="#intro">
            <span class="text-secondary fw-bold">
              <img src='LOGO2.png' class="img-fluid" alt='measuring scale law logo' style={{ maxWidth: '70px' }} />
              <span>
                <img src='name.png' class="img-fluid" alt='name' style={{ maxWidth: '100px' }} />
              </span>

            </span>
          </a>
          {/* toggle button for mobile nav */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
            aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* navbar links  */}
          <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul class="navbar-nav">
              <li class="nav-item mx-4 fw-semibold">
                <a class="nav-link" href="#topics">ACASA</a>
              </li>
              <li class="nav-item mx-4 fw-semibold">
                <a class="nav-link" href="#reviews">PRESENTARE</a>
              </li>
              <li class="nav-item mx-4 fw-semibold">
                <a class="nav-link" href="#contact">DOMENII DE ACTIVITATE</a>
              </li>
              <li class="nav-item  mx-4 fw-semibold d-md-none">
                <a class="nav-link" href="#pricing">Pricing</a>
              </li>
              <li class="nav-item ms-2 d-none d-md-inline">
                <a class="btn" href="#pricing">CONTACT</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;