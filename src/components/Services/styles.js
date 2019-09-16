import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px 0;

  .service-img {
    width: 130px;
    margin-top: 2rem;
  }
  .services {
    padding: 20px;
  }
  .services h4 {
    padding: 1em;
    margin-top: 5px;
    text-transform: uppercase;
  }
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
  .btn-primary {
    box-shadow: none;
    padding: 8px 25px;
    border: none;
    border-radius: 20px;
    background: linear-gradient(to right, #1723b1, #58f0ff);
    transition: transform 1.2s;
  }
  .btn-primary:hover {
    transform: scale(1.2);
  }
`;
