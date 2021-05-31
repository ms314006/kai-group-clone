import React from 'react';
import styled from 'styled-components';
import logoBlack from '../../assets/img/logo-black.png';

const Body = styled.div`
  width: 100vw;
  height: auto;
  padding: 100px 0px;
  position: relative;
  overflow: hidden;
  background: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Images = styled.div`
  display: flex;

  & > .img {
    height: 100px;
    margin: 0px 8px;
  }
`;

const Copyright = styled.div`
  margin-top: 40px;
  text-align: center;

  & > .img {
    width: 80px;
    margin: 20px 0px;
  }

  & > .text {
    line-height: 1.5;
    font-size: 12px;
  }
`;

const Footer = () => (
  <Body>
    <Content>
      <Images>
        <img className="img" src={logoBlack} />
        <img className="img" src={logoBlack} />
        <img className="img" src={logoBlack} />
      </Images>
      <Copyright>
        <img className="img" src={logoBlack} />
        <div className="text">
          Copyright © xxxxxxxxxxxxxxxxxxxx co., ltd.
          <br />
          All Rights Reserved.
        </div>
      </Copyright>
    </Content>
  </Body>
);

export default Footer;
