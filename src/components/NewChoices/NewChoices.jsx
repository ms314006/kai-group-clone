import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  width: 100vw;
  height: 1000px;
  position: relative;
  overflow: hidden;
  background: #d9d9d9;

  @media (max-width: 980px) {
    height: 1580px;
  }
`;

const SuperQImage = styled.img`
  position: absolute;
  top: -960px;
  left: calc(100vw / 2);
  width: 800px;

  @media (max-width: 1400px) {
    left: calc(100vw / 2);
    width: 720px;
  }

  @media (max-width: 980px) {
    top: -1160px;
    left: calc(100vw / 2 - 285px);
    width: 600px;
  }
`;

const SubTitle = styled.div`
  position: absolute;
  top: 140px;
  font-size: 14px;
  transform: rotate(90deg);
  color: #004ea2;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 178px;
  left: calc(100vw / 2 - 560px);
  color: #f7d6bf;
  font-size: 116px;

  @media (max-width: 1400px) {
    top: 122px;
    left: calc(100vw / 2 - 400px);
    font-size: 108px;
  }

  @media (max-width: 980px) {
    top: 620px;
    left: calc(100vw / 2 - 260px);
  }
`;

const Intro = styled.div`
  position: absolute;
  top: 256px;
  left: calc(100vw / 2 - 520px);
  color: #004ea2;

  & > h1 {
    margin-top: 40px;
    font-size: 52px;
    line-height: 84px;
  }

  @media (max-width: 1400px) {
    left: calc(100vw / 2 - 360px);
    top: 200px;
  }

  @media (max-width: 980px) {
    top: 860px;
    left: calc(100vw / 2 - 250px);
  }
`;

const IntroPassage = styled.div`
  margin-top: ${(props) => props.marginTop}px;

  & > p {
    font-size: 14px;
    line-height: 28px;
  }

  & > h3 {
    margin-top: 32px;
    font-size: 24px;
    line-height: 40px;
  }

  @media (max-width: 980px) {
    & > h3 {
      font-size: 30px;
    }

    & > p {
      font-size: 20px;
    }
  }
`;

const NewChoices = () => {
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
        04&nbsp;&nbsp;OOO&nbsp;&nbsp;OOOOOOO
      </SubTitle>
      <BackgroundText>
        OOO
        <br />
        OOOOOOO
      </BackgroundText>
      <Intro>
        <IntroPassage>
          <h3>XXXXXXXXXXX，</h3>
        </IntroPassage>
        <h1>
          XXXXXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXX
        </h1>
        <IntroPassage marginTop={40}>
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXX。
            <br />
            XXXXXXXXXXXXXXXXX，XXXXXXX，XXXXXXX。
            <br />
            XXXXXXXXXX，XXXXXXXX。
          </p>
        </IntroPassage>
        <IntroPassage marginTop={40}>
          <p>
            XXXXXXXXXXXXXXXX，XXXXXXX，
            <br />
            XXXXXXXXXXXXXXXXX，XXXXXXXXXX，
            <br />
            XXXXXXXXXXXXXXXXX，XXXXXXXXXX，
            <br />
            XXXXXXXXXXXXXXXXX，XXXXXXXXXX，XXXXXXX。
          </p>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default NewChoices;
