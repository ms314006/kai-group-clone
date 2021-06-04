import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import superQ1 from '../../assets/img/superQ1.png';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  width: 100vw;
  height: 800px;
  position: relative;
  overflow: hidden;
  background: #ef4245;

  @media (max-width: 980px) {
    height: 1180px;
  }
`;

const SuperQImage = styled.img`
  position: absolute;
  top: -650px;
  left: calc(100vw / 2);
  width: 700px;

  @media (max-width: 1400px) {
    left: calc(100vw / 2 - 100px);
    width: 720px;
  }

  @media (max-width: 980px) {
    top: -860px;
    left: calc(100vw / 2 - 285px);
    width: 600px;
  }
`;

const SubTitle = styled.div`
  position: absolute;
  top: 140px;
  font-size: 14px;
  transform: rotate(90deg);
  color: #fff;
`;

const Intro = styled.div`
  position: absolute;
  top: 164px;
  left: calc(100vw / 2 - 520px);
  color: #fff;

  & > h1 {
    margin-top: 40px;
    font-size: 52px;
    line-height: 84px;
  }

  @media (max-width: 1400px) {
    top: 164px;
    left: calc(100vw / 2 - 360px);
  }

  @media (max-width: 980px) {
    top: 564px;
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

const BuyButton = styled.a`
  font-size: 14px;
  margin-top: 40px;
  width: 240px;
  background: #fff;
  text-decoration: none;
  color: #EF4246;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  padding: 21px 20px 21px 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.35);

  @media (max-width: 980px) {
    font-size: 32px;
    margin: 40px auto 0px auto;
    width: 460px;
    height: 80px;
  }
`; 

const TryIt = () => {
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
        06&nbsp;&nbsp;OOO&nbsp;&nbsp;OO
      </SubTitle>
      <Intro>
        <h1>
          XXXXXXXXXXXXX
          <br />
          XXXXXXXXXX
        </h1>
        <IntroPassage marginTop={40}>
          <p>
            XXXXXXXXXXXXXXXXX，XXX。
            <br />
            XXXXXX，XXXXXXXXXXXXX。
          </p>
        </IntroPassage>
        <BuyButton
          target="_blank"
          href="https://github.com/ms314006/kai-group-clone"
        >
          <span>GitHub Repositories</span>
          <FontAwesomeIcon icon={faBook}/>
        </BuyButton>
      </Intro>
    </Body>
  );
};

export default TryIt;
