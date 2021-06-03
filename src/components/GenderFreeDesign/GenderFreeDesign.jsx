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

  @media (max-width: 980px) {
    height: 1680px;
  }
`;

const SuperQImage = styled.img`
  position: absolute;
  top: -400px;
  left: calc(100vw / 2);
  width: 800px;

  @media (max-width: 1400px) {
    left: calc(100vw / 2);
    width: 720px;
  }

  @media (max-width: 980px) {
    top: -560px;
    left: calc(100vw / 2 - 285px);
    width: 600px;
  }
`;

const SubTitle = styled.div`
  position: absolute;
  top: 140px;
  font-size: 14px;
  transform: rotate(90deg);
  color: #242424;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 132px;
  left: calc(100vw / 2 - 460px);
  color: #f7d6bf;
  font-size: 116px;

  @media (max-width: 1400px) {
    position: absolute;
    top: 122px;
    left: calc(100vw / 2 - 360px);
    font-size: 108px;
  }

  @media (max-width: 980px) {
    top: 520px;
    left: calc(100vw / 2 - 260px);
  }
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

  @media (max-width: 1400px) {
    left: calc(100vw / 2 - 360px);
    top: 360px;
  }

  @media (max-width: 980px) {
    top: 900px;
    left: calc(100vw / 2 - 250px);
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

  @media (max-width: 1400px) {
    & > div {
      width: 400px;
      column-width: 400px;
  
      & > p {
        font-size: 20px;
      }
    }
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
              XXXXXXX，XXXXXXX，XXXXXXXXXX，XXXXXX，
              XXXX，XXXXXXX，XXXX，XXXXXXX，XXXXXXXX，
              XXXX，XXXX，XXXXXXX，XXXXX，XXXXXXXXXX，
              XXXXXXXXXXXX，XXXXXXXXXXX，XXXXXXX，
              XXXXXXXX，XXXXXXXXX，XXXX，XXXXXXXXX，
              XXXXXXXXXX，XXXXX，XXXXXXXX，XXXXXXX，
              XXXXXXXXXXXXXXXXX，XXXXXXXXXXXXX，
              XXXXXX，XXXXXXXXXXXXX，XXXXXXXXXXX，
              XXX，XXXXXXXXXXX，XXXXXXXXXXXXXXX。
            </p>
          </div>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default GenderFreeDesign;
