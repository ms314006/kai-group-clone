import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 100vw;
  height: 864px;
  position: relative;
  overflow: hidden;
  background: #fff;
`;

const Content = styled.div`
  max-width: 760px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #717171;
  margin-top: 140px;
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

const HowToSetUp = () => (
  <Body>
    <SubTitle>
      03&nbsp;&nbsp;OOO&nbsp;&nbsp;OO&nbsp;&nbsp;OOO&nbsp;&nbsp;OO
    </SubTitle>
    <Content>
      <Title>
        XXXXXXXXXXXXXXXXXXX
      </Title>
      <iframe
        width="760"
        height="428"
        src="https://www.youtube.com/embed/TUD9999TbS0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Content>
  </Body>
);

export default HowToSetUp;