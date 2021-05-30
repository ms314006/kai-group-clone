import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import logo from '../../assets/img/logo.png';

const Body = styled.div`
  height: 260px;
  width: 100vw;
  background: #e5e5e5;
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
`;

const News = () => (
  <Body>
    <New>
      <img className="img" src={logo} />
      <div className="title">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
      <FontAwesomeIcon className="linkIcon" icon={faClone} />
    </New>
    <New>
      <img className="img" src={logo} />
      <div className="title">
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXXXXXXXXXXXXXXXXX
      </div>
      <FontAwesomeIcon className="linkIcon" icon={faClone} />
    </New>
  </Body>
);

export default News;
