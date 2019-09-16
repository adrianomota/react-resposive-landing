import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(to right, #1723b1, #58f0ff);
  color: #fff;
  padding-top: 5%;

  .promo-title {
    font-size: 3rem;
    font-weight: 600;
    margin-top: 3em;
  }

  .join-title {
    font-size: 1.44rem;
  }
  .link-play {
    text-decoration: none;
  }
  .link-play:hover {
    color: #58f0ff;
    text-decoration: none !important;
  }
  .play-btn {
    width: 45px;
    margin: 20px 0;
    margin-right: 2em;
    text-decoration: none !important;
    transition: transform 1.2s;
  }
  .play-btn:hover {
    color: #444;
    text-decoration: none !important;
    transform: scale(1.2);
  }
  .banner a {
    color: #fff;
    text-decoration: none !important;
  }
  .img-fluid {
    margin-top: 4rem;
  }
  .bottom-img {
    width: 100%;
  }
`;
