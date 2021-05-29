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
`;

const Logo = styled.img`
  width: 128px;
`;

const SuperQImage1 = styled.img`
  position: absolute;
  top: 120px;
  right: calc(100vw / 2 - 480px);
  width: 800px;
`;

const Intro = styled.div`
  position: absolute;
  top: 260px;
  right: calc(100vw / 2);
  color: #f7d6bf;

  & > h1 {
    font-size: 64px;
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
          剃るまえから、
          <div style={{ marginTop: 32 }}>
            心地いい。
          </div>
        </h1>
        <IntroPassage marginTop="100">
          <p>自分らしく、選べる自由。</p>
          <h3>
            貝印の紙カミソリ™
          </h3>
        </IntroPassage>
        <IntroPassage marginTop="280">
          <h3>
            日々の暮らしを、もっと心地よく。
            <br />
            紙カミソリ™と作る、明日の私。
          </h3>
          <p>
            これまで主流だったプラスチック製カミソリとは一線を画す、
            <br />
            紙と金属でできた世界初の「紙カミソリ™」。
          </p>
          <p>
            1回使い切りで気持ちよく、日々にやさしく寄り添えるカミソリを作りたい…
            <br />
            そんな想いから生まれました。
          </p>
          <p>
            刃物を100年以上作り続けてきたからこそ、
            <br />
            今もこれからも、あなたのそばに。
          </p>
          <p>
            “当たり前”のその先に、紙カミソリ™という選択肢を。
          </p>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default TopBlock;
