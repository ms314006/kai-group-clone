import React, { useEffect } from 'react';
import styled from 'styled-components';
import TopBlock from '../../components/TopBlock';
import PlasticToPaper from '../../components/PlasticToPaper';
import GenderFreeDesign from '../../components/GenderFreeDesign';
import News from '../../components/News';
import HowToSetUp from '../../components/HowToSetUp';
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
      <PlasticToPaper />
      <GenderFreeDesign />
      <News />
      <HowToSetUp />
    </Body>
  );
};

export default LandingPage;
