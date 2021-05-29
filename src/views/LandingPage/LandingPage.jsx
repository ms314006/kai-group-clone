import React, { useEffect } from 'react';
import styled from 'styled-components';
import TopBlock from '../../components/TopBlock';
import FirstSection from '../../components/FirstSection';
import parallaxScrolling from '../../modules/parallaxScrolling';

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Sawarabi Gothic', sans-serif;
`;

const LandingPage = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      parallaxScrolling.transformObserversPositionY();
    });
  }, []);

  return (
    <Body>
      <TopBlock />
      <FirstSection />
    </Body>
  );
};

export default LandingPage;
