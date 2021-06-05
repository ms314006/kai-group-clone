import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const getRightDistance = (displayType) => {
  switch (displayType) {
    case 'open':
      return 0;
    case 'close':
      return -170;
    case 'hide':
      return -220;
    default:
      throw 'error';
  }
};

const getRightDistanceMaxWidth980px = (displayType) => {
  switch (displayType) {
    case 'open':
      return -170;
    case 'close':
      return -170;
    case 'hide':
      return -220;
    default:
      throw 'error';
  }
};

const LinkBody = styled.a`
  position: fixed;
  bottom: 40px;
  right: ${props => getRightDistance(props.displayType)}px;
  z-index: 10;
  text-decoration: none;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 3px 0px 0px 3px/3px 0px 0px 3px;
  padding: 15px 0;
  box-shadow: 0 5px 20px rgb(0 0 0 / 20%);
  width: 220px;
  color: #004EA2;
  transition: 0.5s right;

  & > .icon {
    margin: 0px 20px;
  }

  @media (max-width: 980px) {
    top: 40px;
    right: ${props => getRightDistanceMaxWidth980px(props.displayType)}px;
    bottom: auto;
  }
`;

const FixedLink = () => {
  // open, close, hide
  const [displayType, setDisplayType] = useState('open');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerWidth < 980) {
        if (window.pageYOffset < 9040) {
          setDisplayType('close');
        } else {
          setDisplayType('hide');
        }
      } else {
        if (window.pageYOffset < 1420) {
          setDisplayType('open');
        } else if (window.pageYOffset < 6640) {
          setDisplayType('close');
        } else {
          setDisplayType('hide');
        }
      }
    });
  }, []);

  return (
    <LinkBody
      target="_blank"
      href="https://github.com/ms314006/kai-group-clone"
      displayType={displayType}
    >
      <FontAwesomeIcon className="icon" icon={faBook}/>
      <span>GitHub Repositories</span>
    </LinkBody>
  )
};

export default FixedLink;

