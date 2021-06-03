import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import logoBlack from '../../assets/img/logo-black.png';

const Body = styled.div`
  height: 260px;
  width: 100vw;
  background: #f5f5f5;

  @media (max-width: 980px) {
    padding: 40px 40px 20px 40px;
    box-sizing: border-box;
    height: auto;
  }
`;

const New = styled.div`
  height: 70px;
  display: grid;
  grid-template-areas:
    "image title icon";
  grid-template-columns: 250px 1fr 100px;
  align-items: center;
  max-width: 1060px;
  margin: 0px auto;
  padding: 30px 0;
  cursor: pointer;

  & > .img {
    height: 80px;
    grid-area: image;
  }

  & > .title {
    grid-area: title;
    color: #222;
    font-size: 14px;
  }

  & > .linkIcon {
    width: 24px;
    height: 24px;
    grid-area: icon;
    background: #707070;
    color: #fff;
    padding: 6px;
    border-radius: 25px;
    box-sizing: border-box;
  }

  &:hover {
    & > .linkIcon {
      background: #343434;
    }
  }

  @media (max-width: 980px) {
    height: auto;
    grid-template-areas:
      "image icon"
      "title title";
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr;
    row-gap: 20px;
    align-items: start;
    padding: 0px;
    margin-bottom: 20px; 

    & > .img {
      height: 120px;
    }

    & > .title {
      font-size: 26px;
    }

    & > .linkIcon {
      position: absolute;
      right: 40px;
    }
  }
`;

const News = () => (
  <Body>
    <New>
      <img className="img" src={logoBlack} />
      <div className="title">XXXXXXXXX，XXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXXXXX</div>
      <FontAwesomeIcon className="linkIcon" icon={faClone} />
    </New>
    <New>
      <img className="img" src={logoBlack} />
      <div className="title">
        XXXXXXXXXXXXXX，XXXXXXX，XXXXXXXXXXXXX，XXXXXXXX，XXXXXXXXXXXXXXXX
      </div>
      <FontAwesomeIcon className="linkIcon" icon={faClone} />
    </New>
  </Body>
);

export default News;
