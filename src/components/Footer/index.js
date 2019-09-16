import React from 'react';

import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Section } from './styles';
import facebook from '../../assets/svg/facebook-logo.svg';
import instagram from '../../assets/svg/instagram_.svg';
import twitter from '../../assets/svg/twitter-logo.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-box">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4 footer-box">
            <p id="contact">
              <b>OUR OFFICE</b>
            </p>
            <p>
              <FaMapMarker />
              Holloway Road, London
            </p>
            <p>
              <FaPhone />
              +44 074 675 86 965
            </p>
            <p>
              <FaEnvelope />
              info@examle.com
            </p>
          </div>
          <div className="col-md-4 footer-box">
            <p>
              <b>SUBSCRIBE NEWSLETTER</b>
            </p>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
            <button type="button" className="btn btn-primary" name="button">
              Subscribe
            </button>

            <div id="social">
              <p>Find Us On Social Media</p>
              <div className="social-icons">
                <a href="/" className="svg-icons">
                  <img src={facebook} alt="" />
                </a>
                <a href="/" className="svg-icons">
                  <img src={instagram} alt="" />
                </a>
                <a href="/" className="svg-icons">
                  <img src={twitter} alt="" />
                </a>
                <a href="/" className="svg-icons">
                  <img src={whatsapp} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <p className="copyright">
              Copyright © 2019. All rights reserved | Designed by{' '}
              <a href="https://www.salvatoremandis.it/index-eng.html">
                Salvatore Mandis
              </a>
            </p>
          </div>
          <div className="col-md-6 text-right">
            <p className="copyright">
              <a href="/">Privacy Policy</a>
              <a href="/">Cookie Policy</a>
              <a href="/">Terms & Conditions</a>
            </p>
          </div>
        </div>
        <br />
      </div>
    </Section>
  );
}
