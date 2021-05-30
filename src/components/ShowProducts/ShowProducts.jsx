import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';

const Body = styled.div`
  width: 100vw;
  height: 800px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 1fr 1fr;
`;

const LeftAnimation = styled.div`
  grid-area: left;

  & > div {
    display: flex;
    width: 50vw;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  & > div:nth-child(1) {
    background: #f5f5f5;
    top: 0px;
  }

  & > div:nth-child(2) {
    background: #ef4245;
    top: -800px;
  }

  & > div:nth-child(3) {
    background: #f5f5f5;
    top: -800px;
  }

  & > div:nth-child(4) {
    background: #0075db;
    top: -800px;
  }
`;

const RightAnimation = styled.div`
  grid-area: right;

  & > div {
    display: flex;
    width: 50vw;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  & > div:nth-child(1) {
    background: #00d1d5;
    top: 800px;
  }

  & > div:nth-child(2) {
    background: #f5f5f5;
    top: 800px;
  }

  & > div:nth-child(3) {
    background: #d8d846;
    top: 800px;
  }

  & > div:nth-child(4) {
    background: #f5f5f5;
    top: 0px;
  }
`;

const SuperQImage = styled.img`
  width: 600px;
`;

const ShowProducts = () => {
  const leftImage1 = useRef(null);
  const leftImage2 = useRef(null);
  const leftImage3 = useRef(null);
  const leftImage4 = useRef(null);
  const rightImage1 = useRef(null);
  const rightImage2 = useRef(null);
  const rightImage3 = useRef(null);
  const rightImage4 = useRef(null);

  useEffect(() => {
    const rightImages = [rightImage1, rightImage2, rightImage3, rightImage4];
    const leftImages = [leftImage1, leftImage2, leftImage3, leftImage4];

    for (let imageIndex = 0; imageIndex < 4; imageIndex += 1) {
      setTimeout(() => {
        setInterval(() => {
          const leftImage = leftImages[imageIndex].current;
          const previousLeftImage = leftImages[imageIndex === 0 ? 3 : imageIndex - 1].current;
          previousLeftImage.style.zIndex = 2;
          const rightImage = rightImages[imageIndex].current;
          const previousRightImage = rightImages[imageIndex === 0 ? 3 : imageIndex - 1].current;
          previousRightImage.style.zIndex = 2;

          leftImages.forEach(({ current: otherImage }) => {
            if (otherImage !== leftImage && otherImage !== previousLeftImage) {
              otherImage.style.zIndex = 1;
              leftImage.style.top = -800;
            }
          });
          rightImages.forEach(({ current: otherImage }) => {
            if (otherImage !== rightImage && otherImage !== previousRightImage) {
              otherImage.style.zIndex = 1;
              rightImage.style.top = -800;
            }
          });
          leftImage.style.zIndex = 3;
          rightImage.style.zIndex = 3;
          let leftImageTop = -800;
          let rightImageTop = 800;
          const dropImageInterval = setInterval(() => {
            leftImageTop += 5;
            leftImage.style.top = leftImageTop;

            rightImageTop -= 5;
            rightImage.style.top = rightImageTop;
            if (leftImageTop === 0 && rightImageTop === 0) {
              clearInterval(dropImageInterval);
            }
          }, 1);
        }, 6000);
      }, 1500 * imageIndex);
    }
  }, []);

  return (
    <Body>
      <LeftAnimation>
        <div ref={leftImage1}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={leftImage2}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={leftImage3}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={leftImage4}>
          <SuperQImage src={superQ1} />
        </div>
      </LeftAnimation>
      <div>
      <RightAnimation>
        <div ref={rightImage1}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={rightImage2}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={rightImage3}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={rightImage4}>
          <SuperQImage src={superQ1} />
        </div>
      </RightAnimation>
      </div>
    </Body>
  );
};

export default ShowProducts;
