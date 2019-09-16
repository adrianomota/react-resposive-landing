import styled from 'styled-components';

export const Section = styled.section`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;

  .navbar {
    background: linear-gradient(to right, #1723b1, #58f0ff);
    padding: 0 !important;
  }
  /* Logo resize */
  .navbar-brand img {
    height: 4rem;
    padding-left: 3rem;
  }
  .navbar-nav {
    margin-right: 3rem;
  }

  .navbar-nav li {
    padding: 0 1rem;
  }
  .navbar-nav li {
    padding: 0 1rem;
  }
  .navbar-nav .nav-item .nav-link {
    color: #fff !important;
    font-weight: 600px;
    float: right;
    text-align: left;
  }
  .navbar-nav .nav-item .nav-link:hover {
    color: #1723b1 !important;
  }
  .fa-bars {
    color: #fff !important;
    font-size: 25px !important;
  }
  .navbar-toggler {
    outline: none !important;
  }
`;
