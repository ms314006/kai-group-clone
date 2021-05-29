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
        02&nbsp;&nbsp;GENDER&nbsp;&nbsp;FREE&nbsp;&nbsp;DESIGN
      </SubTitle>
      <BackgroundText>
        GENDER
        <br />
        FREE
        <br />
        DESIGN
      </BackgroundText>
      <Intro>
        <h1>
          ジェンダーフリーな
          <br />
          デザイン。
        </h1>
        <IntroPassage marginTop={40}>
          <h3>シンプルで、手に取りやすい形。</h3>
        </IntroPassage>
        <IntroPassage marginTop={40}>
          <div>
            <p>
              すべての人に手に取ってほしいから、デザインは、とにかくシンプルに。
              カミソリらしいおなじみのT型のフォルムをベースに、シャープすぎず、柔らかすぎないフォルムで。
              紙の強度や厚み、持ち手の長さは、みんなにちょうどいいサイズ感に。誰にでもすんなりと、違和感なく手に取っていただけます。
              パッと見て“紙”と分かるクラフト色、表面には発色の良いカラーをプリント。性別も年齢も限定しない、いつでもどこでも使える、ニュートラルな見た目と使い心地です。
            </p>
          </div>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default GenderFreeDesign;
