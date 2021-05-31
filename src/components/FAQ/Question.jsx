import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Body = styled.div`
  width: 100%;
  color: #707070;
  font-size: 14px;
  margin-bottom: 42px;
`;

const Question = styled.div`
  display: flex;
  width: 100%;
  font-weight: bolder;
  cursor: pointer;

  & > .title {
    flex-grow: 1;
    padding-right: 55px;
  }

  & > .icon {
    width: 24px;
    height: 24px;
    background: #707070;
    color: #fff;
    padding: 6px;
    border-radius: 25px;
    box-sizing: border-box;
  }
`;

const Answer = styled.div`
  overflow: hidden;
  max-height: ${(props) => props.open ? '60' : '0'}px;
  transition: max-height 1s;

  & > div {
    margin: 20px 79px 0px 0px;
  }
`;

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Body>
      <Question onClick={() => setOpen(!open)}>
        <div className="title">
          XXXXXXXXXXXXX、XXXXXXXXXXXXXXX?
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={open ? faMinus : faPlus} />
        </div>
      </Question>
      <Answer open={open}>
        <div>
          XXXXXXXXXXXXXXXXXXXXXXXX
          <br />
          XXXXXXXXXXXXXXXXXXXXXXXXXX。XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。
        </div>
      </Answer>
    </Body>
  );
};
