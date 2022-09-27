import React from "react";
import './ContactForm.css'
import bag from '../src/image/28.jpg'
const ContactForm = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="letter-space">
              Have a question ?<br /> Contact us
            </h2>
            <form className="mt-5 mb-3">
              <div className="form-group Name-section">
              
                 
                <input
                  type="text"
                  className="Name-section active"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                />
                <div className="underline"></div>
              </div>
              <br />
              <div className="form-group Name-section">
                <input
                  type="email"
                  className="Name-section"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
                <div className="underline"></div>
              </div>

              <br />
              <div className="form-group Name-section">
                <textarea
                  type="textarea" row='2' col='4'
                  className="Name-section"
                  aria-describedby="emailHelp"
                  placeholder="Enter your message"
                />
                <div className="underline"></div>
              </div>

              <div className="mt-3">
                <button type="button" className="btn btn-outline-primary text-light mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-6">
          <div className="m-3 end">
          <img src={bag} alt="error" className="side-image"/>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
