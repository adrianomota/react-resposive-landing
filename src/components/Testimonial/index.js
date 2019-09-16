import React from 'react';

import { Section } from './styles';
import testimonial3 from '../../assets/testimonials/testimonial-3.jpg';
import testimonial1 from '../../assets/testimonials/testimonial-1.jpg';

export default function Testimonial() {
  return (
    <Section>
      <div className="container">
        <h3 className="title text-center">TESTIMONIALS</h3>
        <div className="row offset-1">
          <div className="col-md-5 testimonials">
            <p className="feedback">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <img src={testimonial1} alt="" />
            <p className="user-details">
              <b>James</b>
              <br />
              CEO at DIN{' '}
            </p>
          </div>
          <div className="col-md-5 testimonials">
            <p className="feedback">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <img src={testimonial3} alt="" />
            <p className="user-details">
              <b>William</b>
              <br />
              Co-founder at ArtSpace
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
