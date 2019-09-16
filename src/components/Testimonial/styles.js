import styled from 'styled-components';

export const Section = styled.section`
  margin: 100px 0;

  .testimonials {
    border-left: 3px solid #1723b1;
    margin: 50px 0;
  }
  .testimonials img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
  }
  .user-details {
    display: inline-block;
    font-size: 12px;
  }
  .feedback {
    font-style: italic;
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
`;
