import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopBlock from '../../components/TopBlock';
import FirstSection from '../../components/FirstSection';

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Sawarabi Gothic', sans-serif;
`;

const LandingPage = () => {
  const [parallaxElements, setParallaxElements] = useState([]);
  const registerParallaxElements = (elements) => {
    setParallaxElements([...parallaxElements, ...elements]);
  };

  useEffect(() => {
    const setParallax = () => {
      const scrollPositionY = window.pageYOffset;
      parallaxElements.forEach((element) => {
        const scrollMoveSpeed = element.dataset.speed;
        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translateY(${scrollPositionY * scrollMoveSpeed}px)`;
      });
    };
    window.removeEventListener('scroll', setParallax);
    window.addEventListener('scroll', setParallax);
  }, [parallaxElements]);

  return (
    <Body>
      <TopBlock registerParallaxElements={registerParallaxElements} />
      <FirstSection />
    </Body>
  );
};

export default LandingPage;
