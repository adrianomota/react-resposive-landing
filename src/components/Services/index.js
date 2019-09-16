import React from 'react';

import { Section } from './styles';
import undrawWebsiteSetup from '../../assets/svg/undraw_website_setup_5hr2.svg';
import branding from '../../assets/svg/branding.svg';
import ads from '../../assets/svg/ads.svg';
import undrawSavingsDwkw from '../../assets/svg/undraw_Savings_dwkw.svg';
import social from '../../assets/svg/social.svg';
import undrawWireframingNxyi from '../../assets/svg/undraw_wireframing_nxyi.svg';

export default function Services() {
  return (
    <Section>
      <div className="container text-center">
        <h3 className="title text-center">SERVICES</h3>
        <div className="row text-center">
          <div className="col-md-4 services">
            <img src={undrawWebsiteSetup} className="service-img" alt="" />
            <h4>Landing Page Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src={branding} className="service-img" alt="" />
            <h4>Online Branding</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src={ads} className="service-img" alt="" />
            <h4>Google Ads</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src={undrawSavingsDwkw} className="service-img" alt="" />
            <h4>PPC</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src={social} className="service-img" alt="" />
            <h4>Social Media</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src={undrawWireframingNxyi} className="service-img" alt="" />
            <h4>SEO</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-primary" name="button">
          Find Out More
        </button>
      </div>
    </Section>
  );
}
