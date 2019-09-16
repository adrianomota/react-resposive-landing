import React from 'react';

import { Section } from './styles';
import waveHero from '../../assets/ground@-min.png';
import play from '../../assets/svg/play.svg';
import email from '../../assets/svg/undraw_email_campaign_qa8y.svg';

export default function Banner() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="promo-title">Your Digital Agency</p>
            <p className="join-title">
              Join Us! We Will Let Grown Your Business Faster
            </p>
            <a href="/" className="link-play">
              <img src={play} alt="" className="play-btn" />
              Watch Tutorials
            </a>
          </div>
          <div className="col-md-6">
            <img src={email} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <img src={waveHero} className="bottom-img" alt="" />
    </Section>
  );
}
