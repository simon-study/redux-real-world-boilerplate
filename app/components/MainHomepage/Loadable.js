/**
 *
 * Asynchronously loads the component for MainHomepage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
