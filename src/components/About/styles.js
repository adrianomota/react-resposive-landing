import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f8f9fa;
  padding-bottom: 3rem;
  padding-top: 3rem;

  .title::after {
    content: '';
    background: linear-gradient(to right, #1723b1, #58f0ff);
    height: 8px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 70px;
    transform: translateY(23px);
  }
  .about-title {
    font-size: 1.6em;
    margin-top: 8%;
    font-weight: 600;
  }
  ul li {
    margin: 10px 0;
  }
  ul {
    margin-left: 20px;
  }
`;
