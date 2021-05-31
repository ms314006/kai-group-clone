import React from 'react';
import styled from 'styled-components';
import Question from './Question';

const Body = styled.div`
  width: 100vw;
  padding: 120px 0px;
  position: relative;
  overflow: hidden;
  background: #fff;
`;

const Content = styled.div`
  max-width: 760px;
  height: auto;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Questions = styled.div`
  width: 100%;
  height:auto;
`;

const Title = styled.div`
  color: #717171;
  margin-bottom: 100px;
  font-size: 56px;
`;

const SubTitle = styled.div`
  position: absolute;
  top: 140px;
  font-size: 14px;
  transform: rotate(90deg);
  color: 7a7a7a;
`;

const FAQ = () => (
  <Body>
    <SubTitle>
      05&nbsp;&nbsp;OOO
    </SubTitle>
    <Content>
      <Title>
        XXXXXXXXXXXX
      </Title>
      <Questions>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </Questions>
    </Content>
  </Body>
);

export default FAQ;
