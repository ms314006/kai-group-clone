import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';
import superQ1 from '../../assets/img/superQ1.png';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  padding: 28px;
  box-sizing: border-box;
  width: 100%;
  height: 1540px;
  overflow: hidden;
  position: relative;
  background: #0076d7;

  @media (max-width: 980px) {
    height: 1640px;
  }
`;

const Logo = styled.img`
  width: 128px;
`;

const SuperQImage1 = styled.img`
  position: absolute;
  top: 120px;
  right: calc(100vw / 2 - 480px);
  width: 800px;

  @media (max-width: 1400px) {
    right: calc(100vw / 2 - 420px);
    width: 800px;
  }

  @media (max-width: 980px) {
    right: calc(100vw / 2 - 320px);
    width: 600px;
  }
`;

const Intro = styled.div`
  position: absolute;
  top: 260px;
  right: calc(100vw / 2 + 200px);
  color: #f7d6bf;

  & > h1 {
    font-size: 64px;
  }

  @media (max-width: 1400px) {
    right: calc(100vw / 2);
  }

  @media (max-width: 980px) {
    top: 480px;
    right: calc(100vw / 2 - 220px);
  }
`;

const IntroPassage = styled.div`
  margin-top: ${(props) => props.marginTop}px;

  & > p {
    margin-top: 32px;
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

const TopBlock = () => {
  const superQImage1Ref = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    parallaxScrolling.registerObservers([
      superQImage1Ref.current,
      introRef.current,
    ]);
  }, []);

  return (
    <Body>
      <Logo src={logo} />
      <SuperQImage1
        src={superQ1}
        data-speed="0.85"
        ref={superQImage1Ref}
      />
      <Intro
        data-speed="0"
        ref={introRef}
      >
        <h1>
          XXXXXXX
          <div style={{ marginTop: 32 }}>
          XXXX
          </div>
        </h1>
        <IntroPassage marginTop="100">
          <p>XXXX???XXXXXXXXX</p>
          <h3>
            XXXXXXXXX???
          </h3>
        </IntroPassage>
        <IntroPassage marginTop="280">
          <h3>
            XXXXXXXXXXXXXXXXXXXXXX
            <br />
            XXXXXXXXXXXXXXXXXXXXX
          </h3>
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            <br />
            XXXXXXXXXXXXXXXXXXXX
          </p>
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXX
            <br />
            XXXXXXXXXXXXXXXXXXXXXX
          </p>
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXX
            <br />
            XXXXXXXXXXX
          </p>
          <p>
            XXXXXXXXXXXXXXXXXXXXX
          </p>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default TopBlock;
