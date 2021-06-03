import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';

const Body = styled.div`
  width: 100vw;
  height: 800px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-areas: "first second";
  grid-template-columns: 1fr 1fr;

  @media (max-width: 980px) {
    height: 400px;
  }
`;

const FirstAnimation = styled.div`
  grid-area: first;

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

  @media (max-width: 980px) {
    & > div > img {
      height: 400px;
    }
  }
`;

const SecondAnimation = styled.div`
  grid-area: second;

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

  @media (max-width: 980px) {
    & > div > img {
      height: 400px;
    }
  }
`;

const SuperQImage = styled.img`
  width: 600px;
`;

const ShowProducts = () => {
  const firstImage1 = useRef(null);
  const firstImage2 = useRef(null);
  const firstImage3 = useRef(null);
  const firstImage4 = useRef(null);
  const secondImage1 = useRef(null);
  const secondImage2 = useRef(null);
  const secondImage3 = useRef(null);
  const secondImage4 = useRef(null);

  useEffect(() => {
    const secondImages = [secondImage1, secondImage2, secondImage3, secondImage4];
    const firstImages = [firstImage1, firstImage2, firstImage3, firstImage4];

    for (let imageIndex = 0; imageIndex < 4; imageIndex += 1) {
      setTimeout(() => {
        setInterval(() => {
          const firstImage = firstImages[imageIndex].current;
          const previousFirstImage = firstImages[imageIndex === 0 ? 3 : imageIndex - 1].current;
          previousFirstImage.style.zIndex = 2;
          const secondImage = secondImages[imageIndex].current;
          const previousSecondImage = secondImages[imageIndex === 0 ? 3 : imageIndex - 1].current;
          previousSecondImage.style.zIndex = 2;

          firstImages.forEach(({ current: otherImage }) => {
            if (otherImage !== firstImage && otherImage !== previousFirstImage) {
              otherImage.style.zIndex = 1;
              firstImage.style.top = -800;
            }
          });
          secondImages.forEach(({ current: otherImage }) => {
            if (otherImage !== secondImage && otherImage !== previousSecondImage) {
              otherImage.style.zIndex = 1;
              secondImage.style.top = -800;
            }
          });
          firstImage.style.zIndex = 3;
          secondImage.style.zIndex = 3;
          let firstImageTop = -800;
          let secondImageTop = 800;
          const dropImageInterval = setInterval(() => {
            firstImageTop += 5;
            firstImage.style.top = firstImageTop;

            secondImageTop -= 5;
            secondImage.style.top = secondImageTop;
            if (firstImageTop === 0 && secondImageTop === 0) {
              clearInterval(dropImageInterval);
            }
          }, 1);
        }, 6000);
      }, 1500 * imageIndex);
    }
  }, []);

  return (
    <Body>
      <FirstAnimation>
        <div ref={firstImage1}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={firstImage2}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={firstImage3}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={firstImage4}>
          <SuperQImage src={superQ1} />
        </div>
      </FirstAnimation>
      <div>
      <SecondAnimation>
        <div ref={secondImage1}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={secondImage2}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={secondImage3}>
          <SuperQImage src={superQ1} />
        </div>
        <div ref={secondImage4}>
          <SuperQImage src={superQ1} />
        </div>
      </SecondAnimation>
      </div>
    </Body>
  );
};

export default ShowProducts;
