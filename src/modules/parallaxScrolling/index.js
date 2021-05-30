class ParallaxScrolling {
  constructor() {
    this.observers = [];
  }

  registerObservers(observers) {
    this.observers.push(...observers);
  }

  transformObserversPositionY() {
    const scrollPositionY = window.pageYOffset;
    this.observers.forEach((element) => {
      if (element) {
        const scrollMoveSpeed = element.dataset.speed;
        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translateY(${scrollPositionY * scrollMoveSpeed}px)`;
      }
    });
  }
}

const parallaxScrolling = new ParallaxScrolling();

export default parallaxScrolling;
