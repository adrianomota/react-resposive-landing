import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(to right, #1723b1, #58f0ff);
  color: #fff;

  .footer-img {
    width: 100%;
  }
  .footer-box {
    padding: 20px;
  }
  .footer-box img {
    width: 4rem;
    margin-bottom: 20px;
  }
  .footer-box .fa {
    margin-right: 8px;
    font-size: 25px;
    height: 40px;
    width: 40px;
    text-align: center;
    padding-top: 7px;
    border-radius: 2px;
    display: inline-block;
  }
  .footer-box .form-control {
    box-shadow: none !important;
    border: none;
    border-radius: 4px;
    margin: 20px 0;
  }
  .footer-box .btn-primary {
    box-shadow: none !important;
    width: 8rem;
    border: none;
    border-radius: 50px;
    background: linear-gradient(to right, #1723b1, #58f0ff);
    color: #fff;
    transition: transform 1.2s;
  }
  .footer-box .btn-primary:hover {
    transform: scale(1.2);
    color: #fff;
  }
  /*-------- Social Media icons ---------- */
  p {
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
  }

  p > svg {
    margin: 0 8px 0 0;
  }
  .social-icons .svg-icons img {
    width: 23px;
    transition: transform 0.7s;
    margin-right: 1rem;
  }
  .social-icons .svg-icons img:hover {
    transform: scale(1.2);
  }
  .copyright {
    padding-top: 2%;
    font-size: 15px;
  }
  .copyright a {
    text-decoration: none;
    color: #fff;
  }
  .copyright a:hover {
    text-decoration: none;
    color: #1723b1;
  }
`;
