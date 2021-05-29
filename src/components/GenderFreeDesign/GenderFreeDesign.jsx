import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  width: 100vw;
  height: 1000px;
  position: relative;
  overflow: hidden;
  background: #00D1D5;
`;

const SuperQImage = styled.img`
  position: absolute;
  top: -400px;
  left: calc(100vw / 2);
  width: 800px;
`;

const SubTitle = styled.div`
  position: absolute;
  top: 140px;
  font-size: 14px;
  transform: rotate(90deg);
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 132px;
  left: calc(100vw / 2 - 460px);
  color: #f7d6bf;
  font-size: 116px;
`;

const Intro = styled.div`
  position: absolute;
  top: 352px;
  left: calc(100vw / 2 - 520px);
  color: #222222;

  & > h1 {
    font-size: 52px;
    line-height: 84px;
  }
`;

const IntroPassage = styled.div`
  margin-top: ${(props) => props.marginTop}px;

  & > div {
    width: 600px;
    column-width: 240px;

    & > p {
      font-size: 14px;
      line-height: 28px;
    }
  }

  & > h3 {
    margin-top: 32px;
    font-size: 24px;
    line-height: 40px;
  }
`;

const GenderFreeDesign = () => {
  const superQImageRef = useRef(null);

  useEffect(() => {
    parallaxScrolling.registerObservers([superQImageRef.current]);
  }, []);

  return (
    <Body>
      <SuperQImage
        src={superQ1}
        data-speed="0.2"
        ref={superQImageRef}
      />
      <SubTitle>
        02&nbsp;&nbsp;OOOOOO&nbsp;&nbsp;OOOO&nbsp;&nbsp;OOOOOO
      </SubTitle>
      <BackgroundText>
        OOOOOO
        <br />
        OOOO
        <br />
        OOOOOO
      </BackgroundText>
      <Intro>
        <h1>
          XXXXXXXXXXXXXXX
          <br />
          XXXXXXX。
        </h1>
        <IntroPassage marginTop={40}>
          <h3>XXXXXXXXXXXXXXXXXXXXXXX。</h3>
        </IntroPassage>
        <IntroPassage marginTop={40}>
          <div>
            <p>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。
            </p>
          </div>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default GenderFreeDesign;
