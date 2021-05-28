import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const FirstScenes = styled.div`
  padding: 28px;
  width: 100%;
  height: 100%;
  background: #0076d7;
`;

const Logo = styled.div`
  width: 128px;
  height: 48px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img})

`;

const LandingPage = () => (
  <FirstScenes>
    <Logo img={logo} />
  </FirstScenes>
);

export default LandingPage;
