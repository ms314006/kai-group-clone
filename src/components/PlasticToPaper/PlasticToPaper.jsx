import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  width: 100vw;
  height: 900px;
  position: relative;
  background: #D8D845;
`;

const SuperQImage = styled.img`
  position: absolute;
  top: 0px;
  left: calc(100vw / 2 - 620px);
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
  left: calc(100vw / 2 - 60px);
  color: #00ead3;
  font-size: 116px;
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

  & > h3 {
    margin-top: 32px;
    font-size: 24px;
    line-height: 40px;
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
        data-speed="0.08"
        ref={superQImageRef}
      />
      <SubTitle>
        01&nbsp;&nbsp;PLASTIC&nbsp;&nbsp;TO&nbsp;&nbsp;PAPER
      </SubTitle>
      <BackgroundText>
        PLASTIC
        <br />
        TO
        <br />
        PAPER
      </BackgroundText>
      <Intro>
        <h1>
          プラスチックから
          <br />
          「紙」へシフト。
        </h1>
        <IntroPassage marginTop={40}>
          <ul>
            <li>• カミソリを脱プラスチック※なアイテムへ。</li>
            <li>• 使い切りだからいつでも清潔で快適。</li>
            <li>• 本体薄さ3mmで薄くて軽いから、手軽に持ち運びできます。</li>
          </ul>
        </IntroPassage>
        <IntroPassage marginTop={40}>
          <div>
            <p>
              ハンドルに紙、刃体（ヘッド部含む）に金属を使用し、“脱プラスチック※”を実現。
              モノづくりを通してできるエコな取り組みのひとつとして、プラスチック排出量を減らすための一助になればと考えています。
              折り紙のように、一枚の紙を組み立てて使う約3mmの薄型の本体は、重さ約4gと超軽量。薄くて軽いから、バッグにサッと入れて、
              手軽に持ち運べます。紙の材質には、耐水性と剃る時の安定感を兼ね備え、組み立てやすい程よい厚みのものを厳選しました。
              1回使い切りなので、細菌の繁殖やサビの心配がなく、いつでも清潔で快適に使用できます。
            </p>
          </div>
        </IntroPassage>
        <IntroPassage marginTop={20}>
          <span class="prompt">
            ※ 当社製3枚刃カミソリとの比較で98％のプラスチック部分を削減
          </span>
        </IntroPassage>
      </Intro>
    </Body>
  );
};

export default PlasticToPaper;
