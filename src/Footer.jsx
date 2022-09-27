import React from "react";
import "./App.css";
import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaTwitter,FaPhoneAlt,FaMapMarkerAlt } from "react-icons/fa";
// import { IconName } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 head-about ">
              <h2>About Us</h2>
              <div className="underline"></div>
              <p className="mt-2">
                Everyone notice everything that you carry while you are
                travelling,
                <br />
                visiting your friend’s place, attending a party, wedding and
                family
                <br />
                gathering and even go shopping.
              </p>
              <div className="mb-2">
                <a href='https://web.whatsapp.com/'>
                  <button type="button" className="btn-first" >
                    <FaFacebook />
                  </button>
                </a>

                <button type="button" className="btn-first">
                  <FaWhatsapp />{" "}
                </button>
                <button type="button" className="btn-first">
                  <FaTwitter />
                </button>
              </div>

              {/* <h2 className='icons'><FaFacebook/> <FaWhatsapp/> <FaTwitter/></h2> */}
            </div>
            <div className="col-4 transform">
              <h2 className="head-contact ">Contact Us</h2>
              <div className="underline"></div>
              <div className="contact-detail mt-2">
                <p> <BsChatDotsFill/>  bagshop@gmail.com</p>
                {/* <a href="https://silkavenue.pk/product-category/handbags/">https://silkavenue.pk/product-category/handbags/</a> */}
                <p><FaMapMarkerAlt/>  Sawari Bazar District Buner KPK</p>
                <p><FaPhoneAlt/>  03369454688</p>
              </div>


            </div>
          </div>
        </div>
      </section>
      <div className="footer__down ">
        <p className="footer__text text-center ">
          <span>All Rights Reserved. © 2022</span> Parse shop Sawari Buner
           <span className="bold"> Design By : Hazrat zahid </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
