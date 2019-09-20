import React from 'react';
import { Container, PageWrap, Content } from './styles';

import SideBar from '../../components/SideBar';

export default function BurguerMenu() {
  return (
    <Container>
      <SideBar />
      <PageWrap>
        <h1>Header</h1>
      </PageWrap>

      <Content>
        <h1>Content</h1>
      </Content>
    </Container>
  );
}
