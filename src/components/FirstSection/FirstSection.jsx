import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  width: 100vw;
  height: 1200px;
  position: relative;
  background: #D8D845;
`;

const SuperQImage = styled.img`
  position: absolute;
  top: 0px;
  left: calc(100vw / 2 - 620px);
  width: 800px;
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

const FirstSection = () => {
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
      <Intro>
        <h1>
          プラスチックから
          <br />
          「紙」へシフト。
        </h1>
      </Intro>
    </Body>
  );
};

export default FirstSection;
