import textureFactory from './textureFactory';

import * as styles from './textureStyles';

export default Object.keys(styles).reduce((acc, style) => {
  acc[style] = textureFactory(styles[style]);
  return acc;
}, {});
