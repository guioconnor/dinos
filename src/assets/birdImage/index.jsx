import b2 from './img/b2.svg';
import b3 from './img/b3.svg';
import b4 from './img/b4.svg';
import canary from './img/canary.svg';
import cardinal from './img/cardinal.svg';
import eagle from './img/eagle.svg';
import falcon from './img/falcon.svg';
import owl from './img/owl.svg';
import toucan from './img/toucan.svg';

const images = {
  b2,
  b3,
  b4,
  canary,
  cardinal,
  eagle,
  falcon,
  owl,
  toucan,
}

const birdImage = (birdId) => images[birdId];

export const birdImageMiddleware = (bird) => {
  return {
    ...bird,
    image: birdImage(bird.birdId),
  };
}

export default birdImage;


