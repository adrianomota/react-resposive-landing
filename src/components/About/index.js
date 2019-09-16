import React from 'react';
import undrawMobileMarketingIqbr from '../../assets/svg/undraw_mobile_marketing_iqbr.svg';

import { Section } from './styles';

export default function About() {
  return (
    <Section>
      <div className="container">
        <h3 className="title text-center">ABOUT US</h3>
        <div className="row">
          <div className="col-md-6 about">
            <p className="about-title">
              Odio sed id eos et laboriosam consequatur eos earum soluta.
            </p>
            <ul>
              <li>Sint aliquam consequatur ex ex labore.</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>Aspernatur consectetur omnis numquam quaerat.</li>
              <li>Et vel ut quidem alias veritatis repudiandae ut fugit.</li>
              <li>
                Fugit ut maxime incidunt accusantium totam repellendus eum
                error.{' '}
              </li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={undrawMobileMarketingIqbr} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
}
