import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  height: 100vh;

  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: white;
  }

  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;

    ${media.lessThan('medium')`
      display: block;
    `}

    ${media.between('medium', 'large')`
      display: none;
    `}

    ${media.greaterThan('large')`
      display: none;
    `}
  }

  .bm-burger-bars {
    background: #fff;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const PageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  height: 6rem;
  background: linear-gradient(to right, #1723b1, #58f0ff);
  color: #fff;

  ${media.lessThan('medium')`
      display: none;
  `}
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #1723b1, #58f0ff);

  h1 {
    font-size: 3rem;
  }
`;
