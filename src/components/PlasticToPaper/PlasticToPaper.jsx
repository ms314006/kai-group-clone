import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  width: 100vw;
  height: 900px;
  position: relative;
  overflow: hidden;
  background: #D8D845;

  @media (max-width: 980px) {
    height: 1600px;
  }
`;

const SuperQImage = styled.img`
  position: absolute;
  top: -100px;
  left: calc(100vw / 2 - 620px);
  width: 800px;

  @media (max-width: 1400px) {
    left: -60px;
    width: 720px;
  }

  @media (max-width: 980px) {
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
  left: calc(100vw / 2 - 60px);
  color: #f7d6bf;
  font-size: 116px;

  @media (max-width: 1400px) {
    position: absolute;
    top: 132px;
    left: calc(100vw / 2 - 60px);
    font-size: 108px;
  }

  @media (max-width: 980px) {
    top: 432px;
    left: calc(100vw / 2 - 260px);
  }
`;

const Intro = styled.div`
  position: absolute;
  top: 300px;
  left: calc(100vw / 2);
  color: #222222;

  & > h1 {
    font-size: 52px;
    line-height: 84px;
  }

  @media (max-width: 1400px) {
    left: calc(100vw / 2);
    top: 260px;
  }

  @media (max-width: 980px) {
    top: 760px;
    left: calc(100vw / 2 - 250px);
  }
`;

const IntroPassage = styled.div`
  margin-top: ${(props) => props.marginTop}px;

  & > ul {
    font-size: 16px;

    & > li {
      margin: 8px 0px;
    }
  }

  & > div {
    width: 600px;
    column-width: 240px;

    & > p {
      font-size: 14px;
      line-height: 28px;
    }
  }

  & > .prompt {
    font-size: 12px;
  }

  @media (max-width: 1400px) {
    & > div {
      width: 400px;
      column-width: 400px;
  
      & > p {
        font-size: 14px;
        line-height: 28px;
      }
    }
  }

  @media (max-width: 980px) {
    & > ul {
      font-size: 20px;
    }
  
    & > div {
      & > p {
        font-size: 20px;
      }
    }
  }
`;

const PlasticToPaper = () => {
  const superQImageRef = useRef(null);

  useEffect(() => {
    parallaxScrolling.registerObservers([superQImageRef.current]);
  }, []);

  return (
    <Body>
      <SuperQImage
        src={superQ1}
        data-speed="0.1"
        ref={superQImageRef}
      />
      <SubTitle>
        01&nbsp;&nbsp;OOOOOOO&nbsp;&nbsp;OO&nbsp;&nbsp;OOOOO
      </SubTitle>
      <BackgroundText>
        OOOOOOO
        <br />
        OO
        <br />
        OOOOO
      </BackgroundText>
      <Intro>
        <h1>
          XXXXXXXXXXXXX
          <br />
          XXXXXXXXXX
        </h1>
        <IntroPassage marginTop={40}>
          <ul>
            <li>• XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。</li>
            <li>• XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。</li>
            <li>• XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。</li>
          </ul>
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
        <IntroPassage marginTop={20}>
          <span className="prompt">
            ※ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </span>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default PlasticToPaper;
