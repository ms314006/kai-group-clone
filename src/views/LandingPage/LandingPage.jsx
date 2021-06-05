import React, { useEffect } from 'react';
import styled from 'styled-components';
import FixedLink from '../../components/FixedLink';
import TopBlock from '../../components/TopBlock';
import PlasticToPaper from '../../components/PlasticToPaper';
import GenderFreeDesign from '../../components/GenderFreeDesign';
import News from '../../components/News';
import HowToSetUp from '../../components/HowToSetUp';
import ShowProducts from '../../components/ShowProducts';
import NewChoices from '../../components/NewChoices';
import FAQ from '../../components/FAQ';
import TryIt from '../../components/TryIt';
import Footer from '../../components/Footer';
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
      <FixedLink />
      <TopBlock />
      <PlasticToPaper />
      <GenderFreeDesign />
      <News />
      <HowToSetUp />
      <ShowProducts />
      <NewChoices />
      <FAQ />
      <TryIt />
      <Footer />
    </Body>
  );
};

export default LandingPage;
