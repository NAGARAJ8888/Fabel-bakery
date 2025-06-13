import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-dark text-white fixed-bottum'>
    <div className="container">
      <footer className="py-5">
    <div className="row">
      <div className="col-2 text-white">
        <h5>Section</h5>
        <ul className="nav flex-column text-white">
          <li className="nav-item mb-2">Home</li>
          <li className="nav-item mb-2">Features</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>

      <div className="col-2 text-white">
        <h5>Section</h5>
        <ul className="nav flex-column text-white">
          <li className="nav-item mb-2">Home</li>
          <li className="nav-item mb-2">Features</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>

      <div className="col-2 text-white">
        <h5>Section</h5>
        <ul className="nav flex-column text-white">
          <li className="nav-item mb-2">Home</li>
          <li className="nav-item mb-2">Features</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>

      <div className="col-4 offset-1 text-white">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control rounded-0" placeholder="Email address"/>
            <button className="btn btn-primary rounded-0" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top text-white">
      <p>&copy; 2021 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex text-white">
        <li className="ms-3"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></li>
        <li className="ms-3"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></li>
        <li className="ms-3"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></li>
      </ul>
    </div>
  </footer>
  </div>
    </div>
  )
}
