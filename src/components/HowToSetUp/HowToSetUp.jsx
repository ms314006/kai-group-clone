import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 100vw;
  height: 864px;
  position: relative;
  overflow: hidden;
  background: #fff;

  @media (max-width: 980px) {
    height: 764px;
  }
`;

const Content = styled.div`
  max-width: 760px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .iframeContainer {
    width: 760px;
    height: 428px;

    iframe {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 980px) {
    & > .iframeContainer {
      width: 560px;
      height: 328px;
    }
  }
`;

const Title = styled.div`
  color: #717171;
  margin-top: 140px;
  margin-bottom: 100px;
  font-size: 56px;

  @media (max-width: 980px) {
    margin-left: 36px;
    width: 600px;
    font-size: 56px;
  }
`;

const SubTitle = styled.div`
  position: absolute;
  top: 140px;
  font-size: 14px;
  transform: rotate(90deg);
  color: 7a7a7a;

  @media (max-width: 980px) {
    right: -10px;
  }
`;

const HowToSetUp = () => (
  <Body>
    <SubTitle>
      03&nbsp;&nbsp;OOO&nbsp;&nbsp;OO&nbsp;&nbsp;OOO&nbsp;&nbsp;OO
    </SubTitle>
    <Content>
      <Title>
        XXXXXX XXXXX XXXXXX
      </Title>
      <div className="iframeContainer">
        <iframe
          src="https://www.youtube.com/embed/TUD9999TbS0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Content>
  </Body>
);

export default HowToSetUp;
